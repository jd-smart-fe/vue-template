# vue-template

vue-template 是一个基于 Vue 的初始化项目的模板。集成了 Router, Vuex, postcss。
引入了 vue-stone 组件库， 使用了按需加载机制。详细使用方式请点击 [vue-stone](https://github.com/jd-smart-fe/vue-stone.git) 查看。

## 目录

- vue-template
    + 目录
    + 安装
    + 模板的结构
    + 运行
    + 开发说明
        * 数据状态管理 及 router
        * css 预编译
        * 数据请求
        * 引入的 polyfills


## 安装

您可以通过 [smarter](https://github.com/jd-smart-fe/smarter)

脚手架生成工具来安装该模板：
```
$ sudo npm i -g smarter                         # 全局安装 smarter
$ smarter init vue-template my-project        # 生成项目到 my-project 目录下
$ cd my-project/                                # 进入到 my-project 目录
$ npm i                                         # 使用 npm 安装项目的依赖
```

或者直接 clone 该项目：
```
$ git clone https://github.com/jd-smart-fe/vue-template.git
$ cd vue-template
$ rm -rf .git && git init                             # 重新初始化 git 库
$ npm  i                                              # 使用 npm 安装项目的依赖
```

## 模板的结构目录

```
.
├── build                     # Webpack 配置
├── config                    # 一些配置项
├── static                    # 静态资源目录 可以放mock数据接口请求文件
├── src                       # 项目开发文件主目录
│   ├── assets                # 页面中 <img> 标签使用的图片
│   ├── components            # 公共组件目录
│   ├── fetch                 # 网络请求目录
│   ├── libs                  # 公共 js 资源
│   ├── pages                 # 业务组件目录
│   ├── router                # router 目录
│   ├── store                 # vuex
│   │   ├── index.js          # vuex 的 入口
│   │   ├── mutation-types.js # vuex 的 mutation-types 集合
│   │   ├── mutations.js      # vuex 的 mutations 文件
│   │   ├── actions.js        # vuex 的 actions 文件
│   │   └── getters.js        # vuex 的 getters 文件
│   ├── styles                # 公共的 css 文件
│   ├── App.js                # App 组件
│   ├── main.js               # 入口文件
├── index.html                # html 模板
├── package.json              # package.json
└── README.md                 # readme
```

## 运行


```
# install dependencies
npm install

# 启动项目
npm start / npm run dev

# 构建项目
npm run build
```

`npm run build` 会将资源打包到 `./buid/` 文件夹下。

构建打包使用了 **版本号** 的概念，也就是 `css` `js` 等页面中引用的静态资源所在的文件夹的名字是一个 `${staticVersion}/` ，这里的变量
`${staticVersion}` 是取自 `./package.json` 里的 `version` 的值。比如
`./package.json` 的 `version` 值为 `0.1.0` ，打包出来的静态资源路径会是这样
`./build/0.1.0/js/main.js` 。

## 开发说明

本模板是在 `vue-cli 2` 生成的模板的基础上结合我们在项目中常用的配置进行修改而成。

### src 文件结构
- **components** 目录存放公共组件 像 `loading`, `toast` 等这类组件。
- **pages** 目录存放公共组件以外的其他组件。
- **libs** 公共 js， 如 `Zepto.js` 自己封装的工具集 `utils.js` 这种。
- **assets** 页面中使用的 images。
- **styles** 放一些 css 文件。
- **router** 路由。
- **store** Vuex 文件。
- **fetch** 异步数据请求方法可以集中在这里，方便管理。

### 数据状态管理 及 router

使用 [vuex](https://vuex.vuejs.org) 进行状态管理，
使用 [vue-router](https://router.vuejs.org) 路由分发。

### css 预编译

`css` 支持 [precss](https://github.com/jonathantneal/precss)
如果要使用 `Sass` `Less` 请自行添加配置。

### 数据请求

使用 `fetch` 进行异步数据接口请求，为方便管理，我们可以把这些异步请求整合在一个或几个 js 文件里，目录中有一个默认的 `fetch.js` 封装了几个在使用 fetch 请求时处理参数及配置项的方法。

本地开发时，模拟请求的 mock 数据，可以结合使用 [smarter](https://github.com/jd-smart-fe/smarter) 的 `mock` 功能：
```
smarter mock
```

使用 `smarter mock` 启用一个本地服务后，在 `fetch.js` 里修改 `process.env.NODE_ENV === 'development'` 的 `CONFIG.API_PREFIX` 为 smarter mock 服务的地址及端口号。

### 引入的 polyfills

* [`fetch()`](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) via [`whatwg-fetch`](https://github.com/github/fetch).
