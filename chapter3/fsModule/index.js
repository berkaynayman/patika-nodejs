const { readFile, writeFile, appendFile, unlink, mkdir, rmdir } = require('fs')

// DOSYA OKUMAK

readFile('password.txt', 'utf-8', (err, data) => {
    if(err) console.log(err)
    console.log(data)
    console.log('Dosya okundu')
})

// DOSYA OLUŞTURMAK

writeFile('message.txt', 'Hello World', (err) => {
    if(err) console.log(err)
    console.log('Dosya oluşturuldu')
})

writeFile('example.json', '{"name": "Berkay", "age": "21"}', (err) => {
    if(err) console.log(err)
    console.log('Dosya oluşturuldu')
})

// VERİ EKLEMEK

appendFile('password.txt', '\ndata to append', (err) => {
    if(err) throw err
    console.log("DONE")
})

// DOSYA SİLMEK

unlink('message.txt', (err) => {
    if(err) console.log(err)
    console.log('Dosyalar Silindi')
})

// KLASÖRLER OLUŞTURULDU

mkdir('uploads/img', {recursive: true} , (err) => {
    if(err) console.log(err)
    console.log('klasör oluşturuldu')
})

// KLASÖR SİLMEK

rmdir('uploads', {recursive: true} , (err) => {
    if(err) console.log(err)
    console.log('klasör silindir')
})