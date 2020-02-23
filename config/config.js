module.exports = {
    // 开发环境 prod
    enviroument: 'dev',
    database: {
        dbName: 'activation',
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'yangtao123'
    },
    security: {
        secretKey: "abcdefg",
        expiresIn:  1024 * 60 * 60 * 1024
    },
    wx: {
        appId: 'wx12eff660b92ec40e',
        appSecret: '40e158601a8df109f86d3915d6c0cc1a',
        loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
    },
    length: 4
}
