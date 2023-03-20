const express = require('express')
const app = express()

app.use(express.json())

const port = 8000;
/** ---------------------------------------------------------------------------
 *  @Routes
 * --------------------------------------------------------------------------- */

const routes = require('./api/routes/userRoutes');

routes(app);

app.use(function (req, res) {
  res.status(404).send({
    url: req.originalUrl + ' not found'
  });
});



app.listen(port)