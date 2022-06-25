const BLOGS = [
    {desc: "Blog 1", auth: "Blog 1"},
    {desc: "Blog 2", auth: "Blog 2"},
    {desc: "Blog 3", auth: "Blog 3"}
]

const listBlogs = (blogs) => {
    blogs.map((blog) => {
        console.log(`
            ${blog.desc}
            -- ${blog.auth}
        `)
    })
}

const addBlog = (blog) => {

    const promiseBlog = new Promise((resolve, reject) => {
        BLOGS.push(blog)
        resolve(BLOGS)
    })

    return promiseBlog
}

addBlog({desc: "Blog 4", auth: "Blog 4"})
    .then((value) => {
        console.log("Added Blog")
        listBlogs(value)
    }).catch((err) => {
        console.log(err)
    })