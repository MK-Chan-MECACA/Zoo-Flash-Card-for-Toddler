// Example configuration file for Animal Flash Cards App
// Copy this file to config.js and add your actual OpenAI API key

const config = {
    // Your OpenAI API key - Get one from https://platform.openai.com/api-keys
    OPENAI_API_KEY: 'your-openai-api-key-here',
    
    // DALL-E configuration
    DALL_E_CONFIG: {
        model: 'dall-e-3',
        size: '1024x1024',
        quality: 'standard',
        style: 'vivid'
    }
};

// Make config available globally
window.config = config;
