const express = require('express');
const port = 3001;
const path = require('path');
const cors = require('cors')
const app = express();

const routes = require('./routes/index')

app.use(express.json());

app.use(cors({
	origin: 'https://www.alexbranco.dev.br'
}))

app.use(routes)
app.use('/images', express.static(path.resolve(__dirname, "images/uploads")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})