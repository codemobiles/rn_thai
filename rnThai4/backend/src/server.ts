import express from 'express';
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({result: 'Ok'});
});

app.post('/register', (req, res) => {
  res.json({register: req.body});
});

app.listen(3000, () => console.log('server is running..'));
