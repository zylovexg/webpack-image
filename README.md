## npm install
## npm run dev 或者 npm run build

### 步骤
#### npm i file-loader   解析地址的loader
#### npm i url-loader    把图片地址解析成 base64
#### url-loader 使用了，就可以不使用 file-loader，因为里面包括了
#### webpack 配置
```javascript
  module.exports = {
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif)$/,
          use: ['file-loader']   // 如果loader需要配置参数，就得写成对象形式
        }
      ]
    }
  }
```