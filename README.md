# Animal Flash Cards App

A fun, interactive flash card app for toddlers to learn about animals in English and Chinese.

## Features

- 🎨 AI-generated images using OpenAI DALL-E
- 🌍 Bilingual support (English/Chinese)
- 🔊 Speech synthesis for pronunciation
- 📱 Responsive design
- ⚡ Image caching for performance
- 🎮 Interactive sound buttons

## Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/Zoo-Flash-Card-for-Toddler.git
cd Zoo-Flash-Card-for-Toddler
```

### 2. Set up environment variables

Copy the example environment file:
```bash
cp .env.example .env
```

Edit `.env` and add your OpenAI API key:
```bash
# Get your API key from: https://platform.openai.com/api-keys
OPENAI_API_KEY=sk-your-actual-api-key-here

# DALL-E Configuration (optional - defaults are good)
DALL_E_MODEL=dall-e-3
DALL_E_SIZE=1024x1024
DALL_E_QUALITY=standard
DALL_E_STYLE=vivid
```

### 3. Run the app

Open `index.html` in your browser or serve it with a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Usage

1. **Choose a category** from the main page (Zoo, Farm, Ocean, Forest)
2. **Click on animals** to hear their names in English and Chinese
3. **Press Ctrl+Shift+C** to clear image cache and regenerate AI images
4. **Hard refresh** (Ctrl+F5) to clear cache and get new images

## File Structure

```
├── index.html          # Main category selection page
├── zoo.html           # Zoo animals flash cards
├── farm.html          # Farm animals flash cards
├── ocean.html         # Ocean animals flash cards
├── forest.html        # Forest animals flash cards
├── env-loader.js      # Environment variables loader
├── .env.example       # Example environment file
├── .env               # Your environment variables (not in git)
└── README.md          # This file
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `OPENAI_API_KEY` | Your OpenAI API key | Required |
| `DALL_E_MODEL` | DALL-E model to use | `dall-e-3` |
| `DALL_E_SIZE` | Image size | `1024x1024` |
| `DALL_E_QUALITY` | Image quality | `standard` |
| `DALL_E_STYLE` | Image style | `vivid` |

## Features

### AI Image Generation
- Uses OpenAI DALL-E API for high-quality animal images
- Images are cached in localStorage for performance
- Falls back to curated Unsplash images if API is unavailable

### Bilingual Support
- English and Chinese animal names
- Pinyin pronunciation guides
- Speech synthesis for both languages

### Interactive Elements
- Sound buttons for each animal
- Smooth animations and transitions
- Responsive design for all devices

## Troubleshooting

### Images not loading?
1. Check that your `.env` file exists and has the correct API key
2. Open browser console (F12) to see error messages
3. Try clearing cache with Ctrl+Shift+C

### API key issues?
1. Verify your OpenAI API key is valid
2. Check your OpenAI account has credits
3. Ensure the key has DALL-E permissions

### Fallback mode
If no API key is provided, the app will use high-quality fallback images from Unsplash.

## License

MIT License - feel free to use and modify!
