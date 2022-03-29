const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: './',
    productionSourceMap: false,
    transpileDependencies: process.env.NODE_ENV === "development" ? ["*"] : [],
})