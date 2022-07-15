const Blog = require("../models/Blog")

exports.getAllBlog = async (req, res) => {
    const blogs = await Blog.find({})
    res.render('index', {
        blogs
    })
}

exports.getBlog = async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    res.render('post', {
        blog
    })
}

exports.updateBlog = async (req, res) => {
    const blog = await Blog.findOne({_id: req.params.id})
    blog.title = req.body.title
    blog.detail = req.body.detail
    await blog.save()

    res.redirect(`/blogs/${req.params.id}`)
}

exports.deleteBlog = async (req, res) => {
    await Blog.findByIdAndRemove(req.params.id)
    res.redirect('/')
}

exports.addBlog = async (req, res) => {
    await Blog.create(req.body)
    res.redirect('/')
}