import express from 'express';

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/1', (req, res) => {
    res.send('Hi');
});

app.listen(PORT, () => {
    console.log(`Listening to port : ${PORT}`);
});
