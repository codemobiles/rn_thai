import express from 'express';
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({result: 'Ok'});
});

app.post('/register', (req, res) => {
  res.json({register: req.body});
});

let dataArray: any[] = [];

app.post('/record_position', async (req, res) => {
  console.log(JSON.stringify(req.body));
  const data = {...req.body, id: dataArray.length};
  dataArray.push(data);
  res.json({result: 'ok'});
});

app.get('/position', async (req, res) => {
  res.json(dataArray);
});
app.listen(3000, () => console.log('server is running..'));
