const path = require("path");
const port = "8080";

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    // 允许外部ip访问本机服务
    disableHostCheck: true,
    port: port,
    // 在浏览器中不显示编译警告，显示编译错误
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // 需要代理的路径
      [process.env.VUE_APP_BASE_API]: {
        // 代理的目标服务器地址
        target: "http://localhost:4000",
        // 允许跨域
        changeOrigin: true,
        // 代理websockets
        ws: true,
        // 重写路径，删除原来基本路径
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  },
  // 给import设置别名，@等同于src目录路径
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  }
};
