const express = require('express');
const app = express();
const formidable = require('formidable');
const fs = require('fs-extra');

app.get('/', (req, res) => {
  res.end('Hey');
});

// http://localhost:3000/login?username=admin&password=1234
app.get('/login', (req, res) => {
  res.json(req.query);
});

app.get('/register', (req, res) => {
  res.json({result: 'register ok', ...req.query});
});

app.post('/uploads', (req, res) => {
  console.log('1234');
  let form = new formidable.IncomingForm();
  form.parse(req, (error, fields, files) => {
    console.log(JSON.stringify(files));
    var newname = Date.now();
    var oldpath = files.userfile.filepath;
    var newpath =
      __dirname +
      '/upload/' +
      newname.toString() +
      '.' +
      files.userfile.originalFilename.split('.').pop();

    fs.move(oldpath, newpath, function (err) {
      res.json({result: 'Upload Successfully', account: fields});
    });
  });
});

app.listen(3000, () => {
  console.log('Server is running ....');
});
