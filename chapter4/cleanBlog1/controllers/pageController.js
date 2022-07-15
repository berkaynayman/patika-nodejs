const Blog = require("../models/Blog")

exports.getAboutPage = (req, res) => {
    res.render('about')
}

exports.getAddBlogPage = (req, res) => {
    res.render('add_blog')
}

exports.getEditPage = async (req, res) => {
    const blog = await Blog.findOne({_id: req.params.id})
    res.render('edit', {
        blog
    })
}