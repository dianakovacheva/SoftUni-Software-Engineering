const express = require('express');
const { initializeDatabase } = require('./config/database.js');
const cookieParser = require('cookie-parser');
const { auth } = require('./middlewares/authMiddleware.js');
const { errorHandler } = require('./middlewares/errorHandlerMiddleware.js');

const app = express();
const routes = require('./routes.js');

const port = 5050;

require('./config/handlebars.js')(app);

app.use('/static', express.static('public'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(auth);
app.use(routes);
app.use(errorHandler);

initializeDatabase()
    .then(() => {
        app.listen(port, () => console.log(`App listening on port ${port}`));
    })
    .catch((err) => {
        console.log(`Cannot connect to db: ${err}`);
    });
