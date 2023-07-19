//Create web server
import express from 'express';
const app = express();

//Create a route for the app
app.get('/', (req, res) => {
  res.send('Hello World');
});

//Create a port for the app
app.listen(3000, () => {
  console.log('Example app listening on port 3000');
});