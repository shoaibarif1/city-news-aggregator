require('dotenv').config();
console.log("Using News API Key:", process.env.NEWS_API_KEY);

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

if (!process.env.NEWS_API_KEY) {
    console.error("🚨 NEWS_API_KEY is missing! Add it to your .env file.");
    process.exit(1);
}

app.get('/news', async (req, res) => {
    try {
        console.log("Fetching news...");

        const country = req.query.country || 'in'; // Default to India
        const category = req.query.category || 'general';

        const response = await axios.get('https://newsapi.org/v2/everything', {
            params: { 
                q: 'Jammu and Kashmir', // Search for Jammu and Kashmir news
                sortBy: 'publishedAt',  // Sort by latest news
                language: 'en',         // Fetch English news
                apiKey: process.env.NEWS_API_KEY 
            }
        });
        
        if (!response.data || !response.data.articles.length) {
            console.log("No articles found!");
            return res.status(404).json({ error: "No articles found" });
        }

        console.log(`✅ Found ${response.data.articles.length} articles`);

        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');

        res.json(response.data.articles);
    } catch (error) {
        console.error("❌ Error fetching news:", error.response?.data || error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
