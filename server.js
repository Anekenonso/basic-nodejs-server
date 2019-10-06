const express = require('express');
const app = express();

app.get('/', (request, response) => {
   response.send('our first Nodejs webserver');
});

app.listen(3000, ()=> console.log('server running on port 3000'));