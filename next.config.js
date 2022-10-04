const path = require('path')
module.exports = {
    lessLoaderOptions: {
        javascriptEnabled: true
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
} 
