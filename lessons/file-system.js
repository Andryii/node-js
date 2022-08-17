const fs = require('fs')
const path = require('path')

fs.mkdir(path.resolve(__dirname,'dir'), (err)=>
{
    if (err) {
        console.log(err);
        return;
    }
    console.log('Папка созадана');
})