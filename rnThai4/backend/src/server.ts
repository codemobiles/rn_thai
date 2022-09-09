import express from 'express';
const app = express();
app.use(express.json());

export interface TypedRequestBody<T> extends Express.Request {
  body: T;
}

export interface TypedRequestQuery<T> extends Express.Request {
  query: T;
}

app.get('/', (req, res) => {
  res.json({result: 'Ok'});
});

app.post('/register', (req: TypedRequestQuery<User>, res) => {
  res.json({register: req.query});
});

let dataArray: any[] = [];
type User = {username: string; password: string};
app.post('/record_position', async (req: TypedRequestBody<User>, res) => {
  console.log(JSON.stringify(req.body));
  const data = {...req.body, id: dataArray.length};
  dataArray.push(data);
  res.json({result: 'ok'});
});

app.get('/position', async (req, res) => {
  res.json(dataArray);
});
app.listen(3001, () => console.log('server is running..'));
