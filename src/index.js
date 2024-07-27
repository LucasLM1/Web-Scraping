const express = require('express');
const scrape = require('./scraper');
const app = express();
const port = 3000;

app.get('/web-scraper', async (req, res) => {
    const { url } = req.query;
    if (!url) {
        return res.status(400).send('URL is required');
    }

    try {
        const data = await scrape(url);
        res.json(data);
    } catch (error) {
        res.status(500).send('Error occurred while capture | Ocorreu um erro durante a captura');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});