const {dbName,user,password,host,port} = require('../config/config').database

const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    dbName, user, password, {
    // 数据库类型
    dialect: 'mysql',
    host: host,
    port: port,
    logging: false,
    
    timezone: '+08:00',
    define:{
        // 软删除  deletedAt
        paranoid:true,
        deletedAt:'deleted_at',
        updateDAt:'updated_at',
        deletedAt:'deleted_at',
        // 将驼峰转为下划线
        // underscored:true

    }
})


sequelize.sync({
    // 生产环境必须false
    force:false
})


module.exports = { sequelize }