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

import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize('mysql::memory:')

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        validate: {
            notEmpty: true,
        },
    },
    name: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true,
        },
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true,
        },
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true,
        },
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        validate: {
            notEmpty: true,
        },
        defaultValue: false,
    },
    tableName: 'user',
    freezeTableName: true,
    timestamps: false,
    uderscored: true,
})

// sequelize end

export default User
