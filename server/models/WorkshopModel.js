import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Workshop = db.define('workshop',{
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    tanggal:DataTypes.STRING, 
    jam:DataTypes.STRING, 
    tempat:DataTypes.STRING,
    harga:DataTypes.STRING,
    mentor:DataTypes.STRING,
    jabatan_mentor:DataTypes.STRING,
    timeline:DataTypes.TEXT,
    image:DataTypes.STRING,
    url:DataTypes.STRING,

},{
    freezeTableName:true
});

export default Workshop;

(async()=>{
    await db.sync();
})();