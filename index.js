const express = require('express');
const app = express();

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
const PORT = 3001; // Ganti ke port lain
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

