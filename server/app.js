const App =  require('../src/App')
const Koa = require('koa')
const React = require('react')
const Router = require('koa-router')
const fs = require('fs')
const koaStatic = require('koa-static')
const path = require('path')
const reactDom = require('react-dom/server')

const app = new Koa();

app.use(
    koaStatic(path.join(__dirname, '../build'))
)

app.use(
    new Router
    .get('*', (ctx, next) => {
        ctx.respone.type = 'html'
        let shtml = fs.readFileSync(path.join(__dirname, '../build/index.html', 'utf8'))
        ctx.respone.body = shtml.replace('{{root}}', reactDom.renderToString(<App />))
    })
)

app.listen(2000, function() {
    console.log('服务器启动，监听 port：2000 running~')
})