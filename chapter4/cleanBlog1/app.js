const express = require("express")
const app = express()

const port = 3000

app.get("/", (req, res) => {
    const blog = [
        { id: 1, title: "Blog title 1", description: "Blog description 1" },
        { id: 2, title: "Blog title 2", description: "Blog description 2" },
        { id: 3, title: "Blog title 3", description: "Blog description 3" },
        { id: 4, title: "Blog title 4", description: "Blog description 4" }
    ]

    res.send(blog)
})

app.listen(port, () => {
    console.log(`${port} unda çalışıyor.`);
})