// mongodb

// import mongoose from 'mongoose'

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI, {
//             useUnifiedTopology: true,
//             // userNewUrlParser: true,
//             // useCreateIndex: true
//         })

//         console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
//     } catch (error) {
//         console.error(`Error: ${error.message}`.red.underline.bold)
//         process.exit(1)
//     }
// }

// export default connectDB

// mongodb end

// sequelize

import { Sequelize } from 'sequelize'

const DBNAME = process.env.MYSQL_DB
const USERNAME = process.env.MYSQL_USER
const PASSWORD = process.env.MYSQL_PASSWORD
const URI = process.env.MYSQL_URI

const db = new Sequelize('curtainManagement', 'nav_tech', 'qwertyuiop12#$', {
    host: 'navigatortechnologies.cys8ulxk5gzm.ap-southeast-1.rds.amazonaws.com',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
})

const connectDB = async () => {
    try {
        await db.authenticate()
        await db.sync()
        console.log(
            `MySqlDB Connected: ${process.env.MYSQL_URI}`.cyan.underline
        )
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export { db, connectDB }

// sequalize end
