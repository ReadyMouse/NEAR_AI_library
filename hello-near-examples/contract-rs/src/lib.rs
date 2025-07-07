// Find all our documentation at https://docs.near.org
use near_sdk::{log, near, AccountId};
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use borsh_derive::BorshSchema;
use near_sdk::serde::{Deserialize, Serialize};

// Define the contract structure
#[near(contract_state)]
pub struct Contract {
    pub models: Vec<Model>, // Store models in a vector
    pub total_models: u64,
}

// Define the model structure
#[derive(Clone, BorshSerialize, BorshDeserialize, BorshSchema, Serialize, Deserialize)]
#[serde(crate = "near_sdk::serde")]
pub struct Model {
    pub id: String,
    pub name: String,
    pub description: String,
    pub model_type: String, // "llm", "image", "audio", etc.
    pub version: String,
    pub owner: String, // Store as String for BorshSchema compatibility
    pub ipfs_hash: Option<String>, // For storing model files
    pub tags: Vec<String>,
    pub created_at: u64,
    pub is_active: bool,
}

// Define the default, which automatically initializes the contract
impl Default for Contract {
    fn default() -> Self {
        Self {
            models: Vec::new(),
            total_models: 0,
        }
    }
}

// Implement the contract structure
#[near]
impl Contract {
    // Initialize a new AI model entry
    #[payable]
    pub fn create_model(
        &mut self,
        id: String,
        name: String,
        description: String,
        model_type: String,
        ipfs_hash: Option<String>,
        tags: Vec<String>,
    ) {
        log!("Creating new AI model: {}", name);
        
        // Check if model with this ID already exists
        for model in &self.models {
            if model.id == id {
                panic!("Model with ID {} already exists", id);
            }
        }
        
        let model = Model {
            id: id.clone(),
            name: name.clone(),
            description,
            model_type,
            version: "1.0.0".to_string(),
            owner: near_sdk::env::predecessor_account_id().to_string(), // Store as String
            ipfs_hash,
            tags,
            created_at: near_sdk::env::block_timestamp(),
            is_active: true,
        };
        
        // Store the model
        self.models.push(model);
        self.total_models += 1;
    }

    // Get model information by ID
    pub fn get_model_info(&self, id: String) -> Option<(String, String, String, String, String, Vec<String>)> {
        for model in &self.models {
            if model.id == id {
                return Some((
                    model.id.clone(),
                    model.name.clone(),
                    model.description.clone(),
                    model.model_type.clone(),
                    model.version.clone(),
                    model.tags.clone(),
                ));
            }
        }
        None
    }

    // Get total count of models
    pub fn get_total_models(&self) -> u64 {
        self.total_models
    }

    // Update model status
    pub fn set_active_status(&mut self, id: String, is_active: bool) {
        log!("Setting model {} active status to: {}", id, is_active);
        for model in &mut self.models {
            if model.id == id {
                model.is_active = is_active;
                return;
            }
        }
    }

    // Update model version
    pub fn update_version(&mut self, id: String, new_version: String) {
        log!("Updating model {} version to: {}", id, new_version);
        for model in &mut self.models {
            if model.id == id {
                model.version = new_version;
                return;
            }
        }
    }

    // Add tags to model
    pub fn add_tags(&mut self, id: String, new_tags: Vec<String>) {
        log!("Adding tags to model {}: {:?}", id, new_tags);
        for model in &mut self.models {
            if model.id == id {
                model.tags.extend(new_tags);
                return;
            }
        }
    }
}

/*
 * The rest of this file holds the inline tests for the code above
 */
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_create_model() {
        let mut contract = Contract::default();
        contract.create_model(
            "model_001".to_string(),
            "GPT-4".to_string(),
            "Advanced language model".to_string(),
            "llm".to_string(),
            Some("QmHash123".to_string()),
            vec!["language".to_string(), "ai".to_string()],
        );
        
        // Verify the model was created
        assert_eq!(contract.total_models, 1);
        assert_eq!(contract.models.len(), 1);
        
        let model_info = contract.get_model_info("model_001".to_string()).unwrap();
        let (id, name, description, model_type, version, tags) = model_info;
        assert_eq!(id, "model_001");
        assert_eq!(name, "GPT-4");
        assert_eq!(description, "Advanced language model");
        assert_eq!(model_type, "llm");
        assert_eq!(version, "1.0.0");
        assert_eq!(tags, vec!["language", "ai"]);
    }

    #[test]
    fn test_create_multiple_models() {
        let mut contract = Contract::default();
        
        // Create first model
        contract.create_model(
            "model_001".to_string(),
            "GPT-4".to_string(),
            "Advanced language model".to_string(),
            "llm".to_string(),
            None,
            vec!["language".to_string()],
        );
        
        // Create second model
        contract.create_model(
            "model_002".to_string(),
            "DALL-E".to_string(),
            "Image generation model".to_string(),
            "image".to_string(),
            None,
            vec!["image".to_string()],
        );
        
        // Verify both models were created
        assert_eq!(contract.total_models, 2);
        assert_eq!(contract.models.len(), 2);
        
        // Verify we can retrieve both models
        let model1 = contract.get_model_info("model_001".to_string()).unwrap();
        let model2 = contract.get_model_info("model_002".to_string()).unwrap();
        
        assert_eq!(model1.1, "GPT-4"); // name
        assert_eq!(model2.1, "DALL-E"); // name
    }

    #[test]
    fn test_update_model_status() {
        let mut contract = Contract::default();
        contract.create_model(
            "model_002".to_string(),
            "DALL-E".to_string(),
            "Image generation model".to_string(),
            "image".to_string(),
            None,
            vec!["image".to_string()],
        );
        
        contract.set_active_status("model_002".to_string(), false);
        assert_eq!(contract.models[0].is_active, false);
        
        contract.set_active_status("model_002".to_string(), true);
        assert_eq!(contract.models[0].is_active, true);
    }

    #[test]
    fn test_add_tags() {
        let mut contract = Contract::default();
        contract.create_model(
            "model_003".to_string(),
            "Whisper".to_string(),
            "Speech recognition model".to_string(),
            "audio".to_string(),
            None,
            vec!["speech".to_string()],
        );
        
        contract.add_tags("model_003".to_string(), vec!["transcription".to_string(), "openai".to_string()]);
        let (_, _, _, _, _, tags) = contract.get_model_info("model_003".to_string()).unwrap();
        assert_eq!(tags, vec!["speech", "transcription", "openai"]);
    }
}
