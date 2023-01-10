const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  const html = path.join(__dirname, '..', 'public/index.html');
  res.sendFile(html);
});

app.use('*', (req, res) => {
  const html = path.join(__dirname, '..', 'public/index.html');
  res.sendFile(html);
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'internal server error');
});

const port = process.env.PORT || 2000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
