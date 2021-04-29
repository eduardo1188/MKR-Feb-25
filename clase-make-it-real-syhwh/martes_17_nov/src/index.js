const express = require('express');
const path = require('path');
const hbs = require('handlebars');
const app = express();


// settings
app.set('views', path.join(__dirname, 'views'))

app.engine('.hbs', hbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}))

app.set('view engine', '.hbs')

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// el orden de los middlewares si importa

// routes
app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Juan'
  })
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get("/user", (req, res) => {
    res.render("user")
})

app.post("/user", (req, res) => {
    const nombre = req.body.name
    console.log(typeof (nombre))
    res.render("greetngs", {
        name: nombre.toUpperCase(), lastname: "<h1>james</h1>"
    })
})

app.listen(3000, () => console.log('Server runing in port 3000'));


