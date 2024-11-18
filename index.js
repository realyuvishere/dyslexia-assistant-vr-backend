const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Endpoint to handle array of objects with "paragraph" and "image"
app.get('/paragraph', (req, res) => {

    const data = [
        {
            paragraph: "Apple is a fruit. It is red in color.",
            image: "https://via.placeholder.com/150"
        },
        {
            paragraph: "Banana is a fruit. It is yellow in color.",
            image: "https://via.placeholder.com/150"
        }
    ];

    res.send({ message: 'Data received successfully', data });
});

const wordDictionary = {
    "apple": {
        meaning: "A fruit",
        pronunciation: "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAABCxAgAEABAAZGF0YQAAAAA="
    },
    "banana": {
        meaning: "A fruit",
        pronunciation: "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAABCxAgAEABAAZGF0YQAAAAA="
    }
}

// Parameterized endpoint to return word details
app.get('/word/:word', (req, res) => {
    
    const word = req.params.word;
    
    const response = {
        word: word,
        ...wordDictionary[word],
    };

    res.send(response);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});