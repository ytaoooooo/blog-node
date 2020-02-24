const Router = require('koa-router')
const router = new Router()

router.get('/node/api/v1/summary', (ctx, next) => {
    ctx.body = {
        "code": "200",
        "msg": "success",
        "data": {
            sideBarList: [
                {
                    id: 0,
                    name: "React",
                    number: 1,
                    headerImg: "https://yangicheng.cn/static/image/blog-summary/react.png",
                    headerName: "React",
                    headerSummary: "React is an open source JavaScript library used for designing user interfaces.",
                },
                {
                    id: 1,
                    name: "Node",
                    number: 1,
                    headerImg: "https://yangicheng.cn/static/image/blog-summary/node.png",
                    headerName: "Node",
                    headerSummary: "Node.js is a tool for executing JavaScript in a variety of environments.",

                },
                {
                    id: 2,
                    name: "Vue",
                    number: 0,
                    headerImg: "https://yangicheng.cn/static/image/blog-summary/vue.png",
                    headerName: "Vue",
                    headerSummary: "Vue.js is a JavaScript framework for building interactive web applications.",
                },
                {
                    id: 3,
                    name: "Js",
                    number: 0,
                    headerImg: "https://yangicheng.cn/static/image/blog-summary/javascript.png",
                    headerName: "javascript",
                    headerSummary: "JavaScript (JS) is a lightweight interpreted programming language with first-class functions",
                },
                {
                    id: 4,
                    name: "Css",
                    number: 0,
                    headerImg: "https://yangicheng.cn/static/image/blog-summary/css.png",
                    headerName: "Css",
                    headerSummary: "Cascading Style Sheets (CSS) is a language used most often to style and improve upon the appearance of views.",
                }
            ],
            summaryItem: [
                {
                    id: 0,
                    type: 0,
                    name: "hooks",
                    summary: "hooks知识点",
                    date: "2020-2-24",
                },
                {
                    id: 1,
                    type: 1,
                    name: "node是什么",
                    summary: "node的基本概念",
                    date: "2020-2-24"
                }
            ]
        }
    }
})


router.get('/node/api/v1/summary/nice', (ctx, next) => {
    ctx.body = {
        "code": "200",
        "msg": "success",
        "data": {
            niceSummaryItem: [
                {
                    id: 0,
                    type: 0,
                    name: "hooks",
                    summary: "hooks知识点",
                    date: "2020-2-24"
                },
                {
                    id: 1,
                    type: 1,
                    name: "node是什么",
                    summary: "node的基本概念",
                    date: "2020-2-24"
                }
            ]
        }
    }
})


module.exports = router