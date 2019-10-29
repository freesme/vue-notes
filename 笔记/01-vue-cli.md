Notes-

Vue-cli command-Line Interface 命令行界面

用于快速搭建Vue开发环境以及对应的webpack配置

在vue-cli3 脚手架基础上可以使用脚手架2的模板，没有必要安装2，

`npm install @vue/cli -g`

`vue --version`

拉取vue-cli2模板

```bash
npm install -g @vue/cli-init
//vue init运行效果会与`vue-cli@2.x`相同
vue init webpack my-progect
//初始化vuecli2项目
vue init webpack my-project
//初始换脚手架3
vue create my-project
```



```shell
#创建一个基于vue-cli2的模板
vue init webpack vuecli2test
#项目名字 默认(vuecli2test)
? Project name (vuecli2test)
#项目描述信息
? Project description (A Vue.js project)
#作者信息，默认显示Git配置的信息
? Author (lemon <freesme@163.com>)
#构建项目选项
? Vue build (Use arrow keys)
#默认运行时编译
> Runtime + Compiler: recommended for most users
#更小，运行效率更高
  Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere
#是否安装路由  -暂时选择no
? Install vue-router? (Y/n) n
#对ES(JavaScript)代码进行规范，不规范代码编译器报错
? Use ESLint to lint your code? (Y/n) n
#选择Yes会出现 选择规范的标准
> Standard(https://github.com/standard/standard)
  Airbnb(https://github.com/airbnb/javascirpt)
  none(configure it yourself)
#是否添加单元测试
? Set up unit tests (Y/n) n
# e2e end to end 端到端测试 Nightwatch是一个利用selenium或webdriver或hantomjs等进行自动化测试的框架
? Setup e2e tests with Nightwatch? (Y/n) n
#管理项目使用的方式  使用npm
? Should we run `npm install` for you after the project has been created? (recommended) (Use arrow keys)
> Yes, use NPM
  Yes, use Yarn
  No, I will handle that myself


```

