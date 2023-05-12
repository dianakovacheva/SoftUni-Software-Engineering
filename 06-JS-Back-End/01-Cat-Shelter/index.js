const http = require('http');
const fs = require('fs/promises');

const port = 5050;
const app = http.createServer((req, res) => {

});

app.listen(port, () => console.log(`Port is listening on port ${port}`));