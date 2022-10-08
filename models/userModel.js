// mongodb
// import mongoose from 'mongoose'
// import bcrypt from 'bcryptjs'

// const userSchema = mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//         },
//         email: {
//             type: String,
//             required: true,
//             unique: true,
//         },
//         password: {
//             type: String,
//             required: true,
//         },
//         isAdmin: {
//             type: Boolean,
//             required: true,
//             default: false,
//         },
//     },
//     {
//         timestamps: true,
//     }
// )

// userSchema.methods.matchPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password)
// }

// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) {
//         next()
//     }

//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt)
// })

// const User = mongoose.model('User', userSchema)
// mongodb end

// sequelize

import { Sequelize } from 'sequelize'
import { db } from '../config/db.js'

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        validate: {
            notEmpty: true,
        },
    },
    name: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
        },
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
        },
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
        },
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
        validate: {
            notEmpty: true,
        },
        defaultValue: false,
    },
})

// sequelize end

export default User
