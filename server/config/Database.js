import { Sequelize } from "sequelize";

const db = new Sequelize('db_filing_dev', 'root', '',{
   host:"localhost",
   dialect:"mysql"
});

export default db;