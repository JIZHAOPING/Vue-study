# Vue-cli使用详解

## 引言
  > Vue-cli是一个基于Vue.js进行快速开发的完整系统。Vue-cli致力于将vue生态中的工具基础**标准化**。他确保了各种构建工具能够基于智能的**默认配置**即可平稳衔接，这样你可以专注于撰写应用上，而不必花好几天去纠结配置的问题
  * CLI的全拼是command-line-interface，命令行界面，俗称脚手架
  * 它是一个专门为单页面应用快速搭建繁杂的脚手架，可以轻松的创建新的应用程序，而且可用于自动生成VUE和webpack的项目模板
  * 如果开发大型项目，我们必然需要使用Vue cli
  * Vue CLI为我们提供了清晰的代码目录结构, 项目结构、部署， 热加载，单元测试等功能。可以提高开发者的工作效率。

## Vue CLI依赖的环境
* 依赖**nodejs**和**npm**
  * 但是国内npm有时候很慢 ，可以安装cnpm镜像
  > `npm install -g cnpm --registry=https://registry.npm.taobao.org`
* 依赖webpack
  > Vue.js官方脚手架工具使用了webpack模板， 对所有资源进行了压缩优化，在开发过程中提供了一套完整的功能， 提高开发效率

## Vue CLI脚手架安装
1. 安装nodejs
2. 安装全局webpack
3. 安装局部webpack
4. 安装VUE CLI脚手架<br>
  `cnpm install -g @vue/cli@3.12.1`
5. 拉取2.x模板（旧版本）
   > Vue CLI >= 3 和旧版使用了相同的 vue 命令，所以 Vue CLI 2 (vue-cli) 被覆盖了。如果仍然需要使用旧版本的 vue init 功能，可以全局安装一个桥接工具。<br>
   `cnpm install -g @vue/cli-init`
6. 初始化项目<br>
   `vue init webpack my-project`
## Vue-CLI项目
### 初始化项目过程
1. `vue init webpack my-project`
2. ```
   ? Project name *** //项目名称
   ? Project description *** //作者信息
   ? Author ***              //作者信息 .gitconfig中存储了
   ? Vue build ***    //构建方式
   ? Install vue-router  //no,后面自己建
   ? Use Eslint to lint your code?//no 检查代码规范
   ? Set up unit tests //no 单元测试
   ? Setup e2e tests with nightwatch? //no ,end to end 测试，nightwatch是一个自动化测试的框架
   ? should ····？//npm 
   ```

