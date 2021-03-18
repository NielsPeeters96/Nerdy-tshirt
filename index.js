const express = require('express');
const app = express();
const port = 3000;

// Using static files from static directory
app.use(express.static('public'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/css', express.static(__dirname + 'public/css'));

// Setting views (EJS)
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
      res.render('home.ejs');
    });

app.get('/:id', function (req, res) {
    res.render("");
  });

app.get("/offline", (req, res) => {
  res.render("offline.html");
});

app.listen(port, () => console.log(`App is running on port ${port}`));