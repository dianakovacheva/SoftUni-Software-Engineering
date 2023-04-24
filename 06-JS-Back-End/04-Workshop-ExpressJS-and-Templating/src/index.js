const express = require('express');
const handlerbars = require('express-handlebars');
const app = express();
const port = 5050;
const routes = require('./routes.js');

app.use('/static', express.static('public'));

app.engine('hbs', handlerbars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(routes);

app.listen(port, () => console.log(`App listening on port ${port}`));