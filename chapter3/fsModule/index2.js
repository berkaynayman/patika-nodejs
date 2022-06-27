//https://nodejs.org/dist/latest-v16.x/docs/api/globals.html

console.log("runed")

console.log(__dirname)

global.setTimeout(() => {
    console.log('3 second');
}, 3000)