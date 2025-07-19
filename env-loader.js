// Environment Variables Loader
// This file loads environment variables from .env file for client-side use

class EnvLoader {
    constructor() {
        this.env = {};
        this.loadEnvFile();
    }

    async loadEnvFile() {
        try {
            const response = await fetch('.env');
            if (response.ok) {
                const envContent = await response.text();
                this.parseEnvContent(envContent);
                this.setupConfig();
            } else {
                console.warn('⚠️ .env file not found, using fallback configuration');
                this.setupFallbackConfig();
            }
        } catch (error) {
            console.warn('⚠️ Error loading .env file:', error);
            this.setupFallbackConfig();
        }
    }

    parseEnvContent(content) {
        const lines = content.split('\n');
        lines.forEach(line => {
            line = line.trim();
            if (line && !line.startsWith('#')) {
                const [key, value] = line.split('=');
                if (key && value) {
                    this.env[key.trim()] = value.trim();
                }
            }
        });
    }

    setupConfig() {
        window.config = {
            OPENAI_API_KEY: this.env.OPENAI_API_KEY || null,
            DALL_E_CONFIG: {
                model: this.env.DALL_E_MODEL || 'dall-e-3',
                size: this.env.DALL_E_SIZE || '1024x1024',
                quality: this.env.DALL_E_QUALITY || 'standard',
                style: this.env.DALL_E_STYLE || 'vivid'
            }
        };
        console.log('✅ Environment variables loaded successfully');
    }

    setupFallbackConfig() {
        window.config = {
            OPENAI_API_KEY: null,
            DALL_E_CONFIG: {
                model: 'dall-e-3',
                size: '1024x1024',
                quality: 'standard',
                style: 'vivid'
            }
        };
        console.log('ℹ️ Using fallback configuration (no API key)');
    }
}

// Initialize environment loader
const envLoader = new EnvLoader();
