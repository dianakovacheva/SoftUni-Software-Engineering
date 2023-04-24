const express = require('express');
const app = express();
const port = 5050;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/static', express.static('public'));

app.listen(port, () => console.log(`App is listening on por ${port}`));