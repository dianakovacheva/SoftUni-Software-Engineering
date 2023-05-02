const express = require('express');
const app = express();
const routes = require('./routes.js');
const { initializeDatabase } = require('./config/database.js');

const port = 5050;

require('./config/handlebars.js')(app);

app.use('/static', express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

initializeDatabase()
    .then(() => {
        app.listen(port, () => console.log(`App listening on port ${port}`));
    })
    .catch((err) => {
        console.log(`Cannot connect to db: ${err}`);
    });