# solution

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### 生成新页面及依赖
```
yarn page yourPageName
```

### 生成新组件及依赖
```
yarn com yourComponentName
```
### .env.development 中 VUE_APP_ISMOCK 是否启用mock 默认 true

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 项目目录结构

主要的文件与目录如下：

```
├── public                网站根目录
│   └── index.html        网站 home 页模板
├── src                   源码目录
│   ├── assets            全局资源目录
│   ├── components        全局组件目录
│   ├── mock              自定义mock数据
│   ├── routes            routes
│   ├── script            脚本工具
│   ├── service           统一接口请求管理
│   ├── store             状态管理
│   ├── types             全局type定义
│   ├── utils             业务逻辑有关的工具
│   ├── views             页面们
│   ├── app.vue           入口 vue 文件
│   ├── main.ts           入口
│   ├── shims-tsx.d.ts    typescript 类型定义
│   └── shims-vue.d.ts    typescript 类型定义
├── browserslistrc        浏览器兼容版本配置
├── .env.development      开发环境配置
├── .env.production       生产环境配置
├── .env.staging          测试环境配置
├── babel.config.js       babel 配置
├── .gitlab-ci.yml        gitlab构建部署
├── commitlint.config.js  commitlint
├── tslint.json           typescript lint 配置
├── Dockerfile            docker 配置文件
├── README.md             本文件
├── package.json          模块配置
├── vue.config.js         vue cli 配置
└── yarn.lock             yarn lock，推荐使用 yarn 代替 npm
```