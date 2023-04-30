const express = require('express');
const handlerbars = require('express-handlebars');
const app = express();
const routes = require('./routes.js');
const { initializeDatabase } = require('./config/database.js');

const port = 5050;

app.use('/static', express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.engine('hbs', handlerbars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(routes);

initializeDatabase()
    .then(() => {
        app.listen(port, () => console.log(`App listening on port ${port}`));
    });
