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