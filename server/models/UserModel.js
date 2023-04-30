import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define('users',{
    name:{
        type: DataTypes.STRING
    }, 
    npm:{
        type: DataTypes.STRING
    },
    kelas:{
        type: DataTypes.STRING
    },
    jurusan:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    id_line:{
        type: DataTypes.STRING
    },
    no_wa:{
        type: DataTypes.STRING
    },
    pilihan_workshop:{
        type: DataTypes.STRING
    },
    identitas_diri:{
        type: DataTypes.STRING
    },
    pilihan_pembayaran:{
        type: DataTypes.STRING
    },
    bukti_pembayaran:{
        type: DataTypes.STRING
    },
    date:{
        type: DataTypes.TIMESTAMP
    },

},{
    freezeTableName:true
});

export default Users;