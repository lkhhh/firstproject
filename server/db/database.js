import mysql from 'mysql2';
import {config} from '../config.js';
import SQ from 'sequelize';


const {host,user,database,password}=config.db;
const sequelize=new SQ.Sequelize(database,user,password,{
    host,
    dialect:'mysql',  //생략가능 기본값 mysql
    logging:false,
});

const pool=mysql.createPool({
    host:config.db.host,
    user:config.db.user,
    database:config.db.database,
    password:config.db.password,
})

export const db=pool.promise();