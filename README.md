# Steps to create Node Application using npm
## Installation
```bash
npm init
npm install express
```

## Usage
edit server.js
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(8000, () => {
    console.log("App is listening on port 8000");
});
```
Run the app -> ```node server.js```

## Output
```bash
$ node server.js
[INFO] Example app listening on port 8000 at Server.app.listen (E:\Learning\projects\nodeapp\server.js:14:12) 
[DEBUG] This is debug at app.get (E:\Learning\projects\nodeapp\server.js:6:12) 
[ERROR] This is an error at app.get (E:\Learning\projects\nodeapp\server.js:7:12) 
[WARN] This is warning at app.get (E:\Learning\projects\nodeapp\server.js:8:12) 
```