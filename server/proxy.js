const options = {
    target: 'https://test-qmyxcg.myscrm.com.cn', // target host
    changeOrigin: true, // needed for virtual hosted sites
    pathRewrite: {
        '^/api': '/api'
    },
    context: '/api'
}

module.exports = options