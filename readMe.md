# TypeScript 贪吃蛇练习

## 项目环境搭建

- 配置webpack

```
npm init -y
```

(生成package.json文件

```
npm i -D webpack webpack-cli typescript ts-loader
```

(webpack-cli: web pack 命令行工具

配置webpack config

```json
// 引入一个包
const path = require('path');

// webpack中的所有位置信息都应该写在module.exports 中
module.exports = {
    // 入口文件
    entry: "./src/index.ts",
    // 打包文件所在的目录
    output: {
        //指定打包文件目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件的名字
        filename: "bundle.js"
    },
    // module指定webpack打包时要使用的模块
    module: {
        // 指定加载的规则
        rules: [
            {
                // test指定的规则生效的文件
                test: /\.ts$/, // 正则表达式，表示匹配所有以ts结尾的文件
                // 使用ts-loader处理ts文件
                use: 'ts-loader',
                exclude: /node-modules/
            }
        ]
    }
}
```

添加tsconfig.json文件

```
tsc --init
```

(Target: es6

在package.json文件中script添加build选项：

```
"build": "webpack"
```

```
npm run build
```

(2) web pack 插件

1. webpack自动打包html文件

```
npm i -D html-webpack-plugin
```

webpack config.config.json

```
const HTMLWebpackPlugin = require('html-webpack-plugin'); 
// 配置webpack插件
plugins: [
  new HTMLWebpackPlugin({ // options:
  	title: "First App",
  	template: "./src/index.html"
  })
]
```

2. 根据项目改变，自动刷新

```
npm i -D webpack-dev-server
```

Package.json script下:

```
"start": "webpack serve --open 'google chrome'"
```

3. 设置引用模块：以ts和js结尾的文件都可以作为模块使用

```
resolve: {
	extensions: ['.ts', '.js'] //以ts和js结尾的文件都可以作为模块使用
}
```



(3) 更好的兼容性：babel

1. 把新语法转换成旧语法
2. 一些新方法在久的浏览器中不兼容，可以使其兼容

安装

```
npm i -D @babel/core @babel/preset-env babel-loader core-js
```

@babel/preset-env 是预先设置环境

babel-loader是把babel和webpack结合起来的工具

Core-js 模拟js运行环境，是让老浏览器能够兼容新技术(比如promise,ie11没有，需要引入corejs, corejs会引入自己的promise让ie11兼容运行)

改webpack配置文件

use的执行顺序是从后往前执行，先执行ts-loader，再执行用于转换的babel-loader

```json
use: [
        { // 用一个对象来配置babel, 用于是复杂的配置
            //指定加载起
            loader: "babel-loader",
            // 设置babel
            options: {
                // 设置yuzhi的环境
                presets: [
                    [
                        // 指定环境插件
                        "@babel/preset-env",
                        // 配置信息
                        {
                            // 要兼容的目标浏览器
                            targets: {
                                "chrome": "88"
                            },
                            // 指定corejs版本
                            "corejs": "3",
                            // 使用corejs的方式(按需加载)
                            "useBuiltIns": "usage"
                        }
                    ]
                ]
            }


        },
        'ts-loader', // 简单的配置
     ],
```



- 配置less

```
npm i -D less less-loader css-loader style-loader
```

添加新的规则：

```javascript
{
	test: /\.lss$/,
	use: [
		"style-loader",
		"css-loader",
		"less-loader",
	]
}
```

- 配置postcss, 解决兼容性

```
npm i -D postcss postcss-loader postcss-preset-env
```

添加新的规则：

```js
{
	test: /\.lss$/,
	use: [
		"style-loader",
		"css-loader",
    // 引入postcss
		{
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            [
              "postcss-preset-env",
              {
                browser: "last 2 versions"
              }
            ]
          ]
        }
      }
    }
		"less-loader",
	]
}
```

