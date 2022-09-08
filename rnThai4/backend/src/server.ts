import express from 'express';
const app = express();

app.get('./', (req, res) => {
  res.json({result: 'Ok'});
});

app.listen(3000, () => console.log('server is running..'));
