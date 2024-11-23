import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const port = 3000;


const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

app.use(express.static('public'));

app.get('/api/playlist', async (req, res) => {
    const mood = req.query.mood || 'popular music';
    const moodQuery = {
        happy: 'upbeat music',
        sad: 'sad acoustic songs',
        relaxed: 'chill lofi beats',
        energetic: 'high-energy workout music',
    };

    const query = moodQuery[mood] || mood;
    const url = `${YOUTUBE_SEARCH_URL}?part=snippet&q=${query}&type=video&key=${YOUTUBE_API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const playlist = data.items.map(item => ({
            title: item.snippet.title,
            videoId: item.id.videoId,
            thumbnail: item.snippet.thumbnails.default.url,
        }));
        res.json(playlist)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch playlist' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});