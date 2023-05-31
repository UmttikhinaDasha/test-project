export const path = require('path')

module.exports = {
    resolve: {
        alias: {
            'app': path.resolve(__dirname, 'src/app/'),
            'pages': path.resolve(__dirname, 'src/pages/'),
            'components': path.resolve(__dirname, 'src/components/'),
            'utils': path.resolve(__dirname, 'src/utils/'),
        },
    },
}