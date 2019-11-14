const path = require('path')
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const betterProgress = require('better-webpack-progress');
const webpack = require('webpack');
const tsImportPluginFactory = require('ts-import-plugin');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

const resolve = dir => path.join(__dirname, 'src', dir)

module.exports = {
  // 加快编译速度
  productionSourceMap: false,

  css: {
    loaderOptions: {
      less: {
        globalVars: {
          'hack': `true; @import "${path.join(__dirname, './src/assets/style/index.less')}";`
        },
        modifyVars: {
          'hack': `true; @import "${path.join(__dirname, './src/assets/style/vant-theme.less')}";`
        }
      }
    }
  },

  devServer: {
    // host: 'fdev.aiads-dev.com',
<<<<<<< HEAD
    disableHostCheck: true,
=======
    // disableHostCheck: true,
>>>>>>> 04dc15e17ddab44370803f42eafc383ac45db735
    proxy: process.env.VUE_APP_ISMOCK === 'true' ? {
      [process.env.VUE_APP_BASE_API]: {
        target: 'http://localhost:8000/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    } : false
  },

  configureWebpack: config => {
    const isDev = process.env.NODE_ENV === 'development'
    if (isDev) {
      let plugins = []
      plugins.push(
        new webpack.ProgressPlugin(betterProgress({
          mode: 'compact',  // or 'detailed' or 'bar'
        }))
      )
      config.plugins = [...config.plugins, ...plugins]
    }
  },

  chainWebpack: config => {
    const isDev = process.env.NODE_ENV === 'development'

    // 开发|测试|仿真|生产：aiads-dev|qas|stg|prd
    ; ['dev', 'qas', 'stg', 'prd'].forEach(env => {
      config.plugin(env === 'dev' ? 'html' : `html-${env}`).use(HtmlWebpackPlugin, [{
        template: 'public/index.html',
        filename: isDev && env === 'dev'
          ? 'index.html'
          : `index-aiads-${env}.html`,
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
          removeAttributeQuotes: true,
        },
        // 是否使用统计
        useStats: env == 'prd'
      }])
    })

    // 是否警告打包太大
    config.performance .set('hints', false);

    // view-disign theme
    config.module.rule('less').oneOf('normal').use('less-loader')
    .tap(args => ({ ...args, javascriptEnabled: true }))

    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        });
        return options;
      });

    // 更好的利用浏览器缓存
    config
    .when(process.env.NODE_ENV !== 'development',
      config => {
        config
          .optimization.splitChunks({
            chunks: 'all',
            cacheGroups: {
              libs: {
                name: 'chunk-libs',
                test: /[\\/]node_modules[\\/]/,
                priority: 10,
                chunks: 'initial'
              },
              commons: {
                name: 'chunk-commons',
                test: path.resolve(__dirname, 'src/components'),
                minChunks: 2,
                priority: 5,
                reuseExistingChunk: true
              }
            }
          })
      config.optimization.runtimeChunk('single')
    })
  }
}
