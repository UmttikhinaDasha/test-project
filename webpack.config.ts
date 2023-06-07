export const path = require('path')

module.exports = {
    resolve: {
        alias: {
            'app': path.resolve(__dirname, 'src/app/'),
            'pages': path.resolve(__dirname, 'src/pages/'),
            'components': path.resolve(__dirname, 'src/components/'),
            'utils': path.resolve(__dirname, 'src/utils/'),
            'store': path.resolve(__dirname, 'src/store/'),
            'services': path.resolve(__dirname, 'src/services/'),
            'hooks': path.resolve(__dirname, 'src/hooks/'),
            'models': path.resolve(__dirname, 'src/models/'),
        },
    },
}