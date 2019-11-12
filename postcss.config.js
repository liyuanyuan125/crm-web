module.exports = {
  plugins: [
    require('autoprefixer')(),
    require('postcss-pxtorem')({
      rootValue: 37.5,
      propList: ['*']
    })
    // require('postcss-px2rem')({ remUnit: 75 })
  ]
}
