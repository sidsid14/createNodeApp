const express = require('express');
const app = express();
const logger = require('logat');

app.get('/', (req, res) => {
    logger.debug('This is info');
    logger.error('This is an error');
    logger.warn('This is warning');
    res.send('Hello World!');

});
// ['log','warn','error'].forEach(a=>{let b=console[a];console[a]=(...c)=>{try{throw new Error}catch(d){b.apply(console,[d.stack.split('\n')[2].trim().substring(3).replace(__dirname,'').replace(/\s\(./,' at ').replace(/\)/,''),'\n',...c])}}});
app.listen(8000, () => {
    logger.info('Example app listening on port 8000');
    
});