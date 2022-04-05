const express = require('express');
const connectDB = require('./models/config');
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors');
const routes = require('./routes')

connectDB();
const app = express();

app.use(morgan('tiny'));

app.use(express.json());
app.use(cors());

app.use('/', routes)



// app.use
app.get('/test', (req, res) => {
  res.send('API is Running');
});

const PORT = process.env.PORT || 5200;

app.listen(PORT, console.log('Server started on 5200'.green.inverse));

