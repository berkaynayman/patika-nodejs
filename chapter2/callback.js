/* const func1 = () => {
    console.log('func1 çalıştı')
    func2()
}

const func2 = () => {
    console.log('func2 çalıştı')
    func3()
}

const func3 = () => {
    console.log('func3 çalıştı')
}

func1() */

const func1 = () => {
    console.log('func1 çalıştı')
    func3()
}

const func2 = () => {
    console.log('func2 çalıştı')
}

const func3 = () => {
    console.log('func3 çalıştı')
    func2()
}

func1()

// JS in kendisi herzaman senkrın olarak çalışır ve single thread olarak çalışır

let x = 5
console.log("1 -- ", x)

setTimeout(() => {
    x = x + 5
    console.log("2 -- ", x)
}, 3000)

x = x + 5
console.log("3 -- ",x) 

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

const addBook = (newBook, callback) => {
    books.push(newBook)
    callback()
}

addBook({name: "Book 4", author: "Yazar 4"}, listBooks)
//listBooks()