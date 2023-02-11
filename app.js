const express = require('express');
require('dotenv').config();

require('./db/mongoose');
const postRouter = require('./routes/post');

const app = express();
app.use(express.json());

// Routes
app.use('/api', postRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}`));
