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

let sequelize = null
let db = {}

const connectDB = async () => {
    sequelize = new Sequelize(
        process.env.MYSQL_DB,
        process.env.MYSQL_USER,
        process.env.MYSQL_PASSWORD,
        {
            host: process.env.MYSQL_URI,
            dialect: 'mysql',
        }
    )

    try {
        await sequelize.authenticate()
        console.log(
            `MySqlDB Connected: ${process.env.MYSQL_URI}`.cyan.underline
        )
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}
db.sequelize = sequelize
db.connectDB = connectDB
export default db

// sequalize end
