import { useState, useEffect } from 'react';
import { useWalletSelector } from '@near-wallet-selector/react-hook';

import styles from '@/styles/app.module.css';

export const AICatalog = () => {
  const { selector, accountId } = useWalletSelector();
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('name');
  const [searchTags, setSearchTags] = useState('');
  const [totalModels, setTotalModels] = useState(0);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newModel, setNewModel] = useState({
    id: '',
    name: '',
    description: '',
    model_type: 'llm',
    ipfs_hash: '',
    tags: ''
  });

  // Fetch total models count
  const fetchTotalModels = async () => {
    if (!selector) return;
    
    try {
      const { network } = selector.store.getState();
      const result = await selector.query({
        request: {
          method: 'query',
          params: {
            request_type: 'call_function',
            finality: 'optimistic',
            account_id: process.env.NEXT_PUBLIC_CONTRACT_ID,
            method_name: 'get_total_models',
            args_base64: btoa(JSON.stringify({}))
          }
        }
      });
      setTotalModels(JSON.parse(result.result));
    } catch (error) {
      console.error('Error fetching total models:', error);
    }
  };

  // Fetch all models
  const fetchModels = async () => {
    if (!selector) return;
    
    setLoading(true);
    try {
      const { network } = selector.store.getState();
      const result = await selector.query({
        request: {
          method: 'query',
          params: {
            request_type: 'call_function',
            finality: 'optimistic',
            account_id: process.env.NEXT_PUBLIC_CONTRACT_ID,
            method_name: 'get_all_models',
            args_base64: btoa(JSON.stringify({ from_index: 0, limit: 50 }))
          }
        }
      });
      setModels(JSON.parse(result.result));
    } catch (error) {
      console.error('Error fetching models:', error);
    } finally {
      setLoading(false);
    }
  };

  // Search models
  const searchModels = async () => {
    if (!selector || !searchQuery.trim()) return;
    
    setLoading(true);
    try {
      let result;
      switch (searchType) {
        case 'name':
          result = await selector.query({
            request: {
              method: 'query',
              params: {
                request_type: 'call_function',
                finality: 'optimistic',
                account_id: process.env.NEXT_PUBLIC_CONTRACT_ID,
                method_name: 'search_by_name',
                args_base64: btoa(JSON.stringify({ name_query: searchQuery }))
              }
            }
          });
          break;
        case 'type':
          result = await selector.query({
            request: {
              method: 'query',
              params: {
                request_type: 'call_function',
                finality: 'optimistic',
                account_id: process.env.NEXT_PUBLIC_CONTRACT_ID,
                method_name: 'search_by_type',
                args_base64: btoa(JSON.stringify({ model_type: searchQuery }))
              }
            }
          });
          break;
        case 'tags':
          const tags = searchTags.split(',').map(tag => tag.trim()).filter(tag => tag);
          result = await selector.query({
            request: {
              method: 'query',
              params: {
                request_type: 'call_function',
                finality: 'optimistic',
                account_id: process.env.NEXT_PUBLIC_CONTRACT_ID,
                method_name: 'search_by_tags',
                args_base64: btoa(JSON.stringify({ tags }))
              }
            }
          });
          break;
        default:
          return;
      }
      setModels(JSON.parse(result.result));
    } catch (error) {
      console.error('Error searching models:', error);
    } finally {
      setLoading(false);
    }
  };

  // Create new model
  const createModel = async () => {
    if (!selector || !accountId) return;
    
    try {
      const tags = newModel.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
      
      await selector.signAndSendTransaction({
        signerId: accountId,
        receiverId: process.env.NEXT_PUBLIC_CONTRACT_ID,
        actions: [{
          type: 'FunctionCall',
          params: {
            methodName: 'create_model',
            args: {
              id: newModel.id,
              name: newModel.name,
              description: newModel.description,
              model_type: newModel.model_type,
              ipfs_hash: newModel.ipfs_hash || null,
              tags
            },
            gas: '300000000000000',
            deposit: '1'
          }
        }]
      });
      
      // Reset form and refresh
      setNewModel({
        id: '',
        name: '',
        description: '',
        model_type: 'llm',
        ipfs_hash: '',
        tags: ''
      });
      setShowCreateForm(false);
      fetchModels();
      fetchTotalModels();
    } catch (error) {
      console.error('Error creating model:', error);
    }
  };

  useEffect(() => {
    fetchTotalModels();
    fetchModels();
  }, [selector]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchType === 'tags') {
      searchModels();
    } else {
      searchModels();
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchTags('');
    fetchModels();
  };

  return (
    <div className={styles.container}>
      <h1>AI Model Catalog</h1>
      <p>Total Models: {totalModels}</p>
      
      {/* Search Section */}
      <div className={styles.searchSection}>
        <h2>Search Models</h2>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <select 
            value={searchType} 
            onChange={(e) => setSearchType(e.target.value)}
            className={styles.select}
          >
            <option value="name">Search by Name</option>
            <option value="type">Search by Type</option>
            <option value="tags">Search by Tags</option>
          </select>
          
          {searchType === 'tags' ? (
            <input
              type="text"
              placeholder="Enter tags separated by commas"
              value={searchTags}
              onChange={(e) => setSearchTags(e.target.value)}
              className={styles.input}
            />
          ) : (
            <input
              type="text"
              placeholder={`Search by ${searchType}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.input}
            />
          )}
          
          <button type="submit" className={styles.button}>
            Search
          </button>
          <button type="button" onClick={clearSearch} className={styles.button}>
            Clear
          </button>
        </form>
      </div>

      {/* Create Model Section */}
      <div className={styles.createSection}>
        <button 
          onClick={() => setShowCreateForm(!showCreateForm)}
          className={styles.button}
        >
          {showCreateForm ? 'Cancel' : 'Add New Model'}
        </button>
        
        {showCreateForm && (
          <form onSubmit={(e) => { e.preventDefault(); createModel(); }} className={styles.createForm}>
            <h3>Create New Model</h3>
            <input
              type="text"
              placeholder="Model ID"
              value={newModel.id}
              onChange={(e) => setNewModel({...newModel, id: e.target.value})}
              className={styles.input}
              required
            />
            <input
              type="text"
              placeholder="Model Name"
              value={newModel.name}
              onChange={(e) => setNewModel({...newModel, name: e.target.value})}
              className={styles.input}
              required
            />
            <textarea
              placeholder="Description"
              value={newModel.description}
              onChange={(e) => setNewModel({...newModel, description: e.target.value})}
              className={styles.textarea}
              required
            />
            <select
              value={newModel.model_type}
              onChange={(e) => setNewModel({...newModel, model_type: e.target.value})}
              className={styles.select}
            >
              <option value="llm">Language Model (LLM)</option>
              <option value="image">Image Generation</option>
              <option value="audio">Audio Processing</option>
              <option value="video">Video Processing</option>
              <option value="multimodal">Multimodal</option>
            </select>
            <input
              type="text"
              placeholder="IPFS Hash (optional)"
              value={newModel.ipfs_hash}
              onChange={(e) => setNewModel({...newModel, ipfs_hash: e.target.value})}
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Tags (comma separated)"
              value={newModel.tags}
              onChange={(e) => setNewModel({...newModel, tags: e.target.value})}
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Create Model
            </button>
          </form>
        )}
      </div>

      {/* Models Display */}
      <div className={styles.modelsSection}>
        <h2>Models ({models.length})</h2>
        {loading ? (
          <p>Loading...</p>
        ) : models.length === 0 ? (
          <p>No models found.</p>
        ) : (
          <div className={styles.modelsGrid}>
            {models.map((model, index) => (
              <div key={model.id || index} className={styles.modelCard}>
                <h3>{model.name}</h3>
                <p><strong>ID:</strong> {model.id}</p>
                <p><strong>Type:</strong> {model.model_type}</p>
                <p><strong>Description:</strong> {model.description}</p>
                <p><strong>Version:</strong> {model.version}</p>
                <p><strong>Owner:</strong> {model.owner}</p>
                <p><strong>Status:</strong> {model.is_active ? 'Active' : 'Inactive'}</p>
                {model.ipfs_hash && (
                  <p><strong>IPFS:</strong> {model.ipfs_hash}</p>
                )}
                {model.tags && model.tags.length > 0 && (
                  <div>
                    <strong>Tags:</strong>
                    <div className={styles.tags}>
                      {model.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
                <p><strong>Created:</strong> {new Date(model.created_at / 1000000).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}; 