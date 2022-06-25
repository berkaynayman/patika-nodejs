const promise1 = new Promise((resolve, reject) => {
    resolve("veriler alındı")
    reject("Bağlantı hatası")
})

//console.log(promise1)

promise1
    .then(val => {
        console.log(val)
    }).catch(err => {
        console.log(err)
    })

const books = [
    {name: "Book 1", author: "Yazar 1"},
    {name: "Book 2", author: "Yazar 2"},
    {name: "Book 3", author: "Yazar 3"}
]

const listBooks = () => {
    books.map(book => {
        console.log(book.name)
    })
}

const addBook = (newBook) => {

    const promise2 = new Promise((resolve, reject) => {
        books.push(newBook)
        //resolve(books)
        reject("BIR HATA OLUSTU")
    })

    return promise2
}

addBook({name: "Book 4", author: "Yazar 4"})
    .then(() => {
        console.log("new list")
        listBooks()
    }).catch((err) => {
        console.log(err);
    })