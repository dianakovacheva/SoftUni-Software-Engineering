const express = require('express');
const handlerbars = require('express-handlebars');
const app = express();
const port = 5050;

app.use('/static', express.static('public'));

app.engine('hbs', handlerbars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', './src/views');



app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => console.log(`App listening on port ${port}`));