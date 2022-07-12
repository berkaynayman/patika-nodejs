const express = require("express")
const mongoose = require('mongoose')

const app = express()

const Blog = require('./models/Blog')


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


app.get("/", async (req, res) => {
    const blogs = await Blog.find({})
    console.log('BLOGS - ', blogs)
    res.render('index', {
        blogs
    })
})
app.get("/about", (req, res) => {
    res.render('about')
})
app.get("/add_blog", (req, res) => {
    res.render('add_blog')
})

app.get("/blogs/:id", async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    console.log(req.params.id)
    res.render('post', {
        blog
    })
})

app.post('/addBlog', async (req, res) => {
    console.log('req.body', req.body)
    await Blog.create(req.body)
    res.redirect('/')
})

const port = 3000
app.listen(port, () => {
    console.log(`${port} unda çalışıyor.`);
})