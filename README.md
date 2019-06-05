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
[INFO]  on  Wed, 05 Jun 2019 06:58:37 GMT  at  Server.app.listen (E:\Learning\projects\nodeapp\server.js:14:12) 
Object0:  Example app listening on port 8000
[DEBUG]  on  Wed, 05 Jun 2019 06:58:43 GMT  at  app.get (E:\Learning\projects\nodeapp\server.js:6:12) 
Object0:  This is info
[ERROR]  on  Wed, 05 Jun 2019 06:58:43 GMT  at  app.get (E:\Learning\projects\nodeapp\server.js:7:12) 
Object0:  This is an error
[WARN]  on  Wed, 05 Jun 2019 06:58:43 GMT  at  app.get (E:\Learning\projects\nodeapp\server.js:8:12) 
Object0:  This is warning
```