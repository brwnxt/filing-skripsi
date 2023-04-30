import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const AccountUsers = db.define('account_users',{
    username:{
        type: DataTypes.STRING
    }, 
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type:DataTypes.TEXT
    }
},{
    freezeTableName:true
});

export default AccountUsers;