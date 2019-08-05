const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const path = require('path')

let outdir="dist";
if( process.env.NODE_ENV === 'production'){
  outdir="dist_prod" ;
}else if(process.env.NODE_ENV === 'test'){
  outdir="dist_test" ;
}

// 引入全局的less  需要cnpm i style-resources-loader --save
function addStyleResource(rule) {
  rule.use('style-resource')
      .loader('style-resources-loader')
      .options({
          patterns: [
              path.resolve(__dirname, 'src/assets/css/global.less'), // 需要全局导入的less
          ],
      })
}

module.exports = {
    publicPath: '/', // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
    outputDir: outdir, // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
    assetsDir: 'public', //放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
    indexPath:'index.html', //指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
    pages: {
      //pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
      index: {
        //除了 entry 之外都是可选的
        entry: 'src/main.js', // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
        template: 'public/index.html', // 模板来源
        filename: 'index.html', // 在 dist/index.html 的输出
        title: 'Index Page', // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
        chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
      }
    },
    lintOnSave: false, // 是否在保存的时候检查(关闭eslint代码检查) 
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
    // runtimeCompiler:true,
    css: {
      // extract: true, // 是否使用css分离插件 ExtractTextPlugin 注释这行配合config.resolve.symlinks(true)可解决css不能热更新问题
      sourceMap: false, // 开启 CSS source maps
      loaderOptions: {
        // 引入全局的less
        less: {
          javascriptEnabled: true
        },
        //针对rem布局配置
        postcss: {
          plugins: [
            autoprefixer(),
            pxtorem({
              rootValue: 37.5,
              propList: ['*'],
              // 该项仅在使用 Circle 组件时需要
              // 原因参见 https://github.com/youzan/vant/issues/1948
              selectorBlackList: ['van-circle__layer']
            })
          ]
        }
      }, // css预设器配置项
      modules: false // 启用 CSS modules for all css / pre-processor files.
    },
    devServer: {
      // 环境配置
    //   host: '192.168.1.53',
      port: 8080,
      https: false,
      hotOnly: false,
      open: true, //配置自动启动浏览器
    // //反向代理  暂不需要
    // //   proxy: 'http://localhost:4000',//配置一个
    //   proxy: {//配置多个
    //     '/hrm/api': {
    //        //target: 'http://192.168.1.209:10751/', // Dev环境
    //        //  target: 'http://192.168.1.238:10751/', // Test环境
    //        // target: 'http://192.168.1.215:10751/', // Rls环境
    //        target: 'http://192.168.1.218:10751/', // 正式环境
    //        changeOrigin: true,
    //        autoRewrite: true,
    //        cookieDomainRewrite: true,
    //        pathRewrite: {
    //          '^/hrm/api/': '/'
    //        }
    //      }
    //    }
    },
    pluginOptions: {
      // 第三方插件配置
      // ...
    },
    parallel:true,
    chainWebpack: config => {
        // 引入全局的less
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)));
        // 修复HMR   解决css不能热更新问题
        // config.resolve.symlinks(true);

    },
    configureWebpack: {
      // webpack的配置修改
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
        //防止页面显示空白的配置
        'vue$': 'vue/dist/vue.esm.js' 
        },
        //同时css{}中extract: true须配合注释   则解决css不能热更新问题  
        symlinks:true 

      }
    },
   
  }
  
  