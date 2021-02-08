const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


require("./routes/noteRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });
