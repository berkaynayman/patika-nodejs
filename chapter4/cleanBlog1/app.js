const express = require("express")
const mongoose = require('mongoose')

const methodOverride = require('method-override')

const app = express()

const pageController = require('./controllers/pageController')
const blogController = require('./controllers/blogController')

mongoose.connect('mongodb://127.0.0.1:27017/cleanblog-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// TEMPLATE ENGINE
app.set('view engine', 'ejs')

// MIDDLEWARES
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method', {
    methods:['POST', 'GET']
}))

app.get("/about", pageController.getAboutPage)
app.get("/add_blog", pageController.getAddBlogPage)
app.get('/blogs/edit/:id', pageController.getEditPage)

app.get("/", blogController.getAllBlog)
app.post('/addBlog', blogController.addBlog)
app.get("/blogs/:id", blogController.getBlog)
app.put('/blogs/:id', blogController.updateBlog)
app.delete('/blogs/:id', blogController.deleteBlog)

const port = 3000
app.listen(port, () => {
    console.log(`${port} unda çalışıyor.`);
})