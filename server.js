const express = require('express');
const compression = require('compression');
const logger = require('morgan');
const app = express();
const http = require('http');
const path = require('path');
const port = 8000;
app.use(compression());
app.use(logger('dev'));


// CORS enabled
app.use(function(req, res, next) {
    // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
   });
   
// Use the whole root as static files to be able to serve the html file and
// the build folder
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '/')));
// Send html on '/'path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, + '/index.html'));
})
// Create the server and listen on port
http.createServer(app).listen(app.get('port'), () => {
    console.log(`Server running on localhost:${app.get('port')}`);
});