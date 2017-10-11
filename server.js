const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('_method'))

app.set('view engine', 'ejs');

const donuts = require('./routes/donuts');
const shops = require('./routes/shops');

app.use('/donuts',donuts);
app.use('/shops',shops);

app.get('/', (req, res) => {
  res.render('./landing.ejs');
})

app.listen(PORT, ()=> {
  console.log('Listening on port',PORT);
});

module.exports = app;
