use near_workspaces::types::{NearToken, Gas};
use serde_json::json;

const FIVE_NEAR: NearToken = NearToken::from_near(5);

#[tokio::test]
async fn test_contract_is_operational() -> Result<(), Box<dyn std::error::Error>> {
    let sandbox = near_workspaces::sandbox().await?;
    let contract_wasm = near_workspaces::compile_project("./").await?;

    let root = sandbox.root_account()?;

    let user_account = root.create_subaccount("user").initial_balance(FIVE_NEAR).transact().await?.unwrap();
    let contract_account = root.create_subaccount("contract").initial_balance(FIVE_NEAR).transact().await?.unwrap();

    let contract = contract_account.deploy(&contract_wasm).await?.unwrap();

    // Test creating a model
    let outcome = user_account
        .call(contract.id(), "create_model")
        .args_json(json!({
            "id": "test_model_001",
            "name": "Test GPT Model",
            "description": "A test language model",
            "model_type": "llm",
            "ipfs_hash": "QmTestHash123",
            "tags": ["test", "language", "ai"]
        }))
        .gas(Gas::from_gas(300_000_000_000_000)) // 300 TGas
        .deposit(NearToken::from_yoctonear(1)) // 1 yoctoNEAR deposit
        .transact()
        .await?;
    assert!(outcome.is_success());

    // Test getting model info
    let model_info_outcome = contract
        .view("get_model_info")
        .args_json(json!({
            "id": "test_model_001"
        }))
        .await?;
    let model_info: (String, String, String, String, String, Vec<String>) = model_info_outcome.json()?;
    assert_eq!(model_info.0, "test_model_001"); // id
    assert_eq!(model_info.1, "Test GPT Model"); // name
    assert_eq!(model_info.2, "A test language model"); // description
    assert_eq!(model_info.3, "llm"); // model_type

    // Test getting total models count
    let total_models_outcome = contract
        .view("get_total_models")
        .args_json(json!({}))
        .await?;
    let total_models: u64 = total_models_outcome.json()?;
    assert_eq!(total_models, 1);

    Ok(())
}
