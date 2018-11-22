const folder = './dist/img/demo/'
const fs = require('fs')

function replaceSpaceWithUnderscre(){
    fs.readdir(folder, (err, files) => {
        files.forEach(file => {
            console.log(file)
            fs.rename(folder+file, folder+file.replace(' ', '_'), (err) => {
                if(err) console.error(err)
            })
        })
    })
}