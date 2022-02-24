import dotenv from 'dotenv';
dotenv.config();

function required(ket,defaultValue=undefined){
    const value =process.env[key]||defaultValue;
    if(value==null){
        throw new Error(`key ${key} is undefined`);
    }
    return value;
}
export const config={
    jwt:{
        secretKey: required('JWT_SECRET'),
        expriresInSec:parseInt(required('JWT_EXPIRES_SCE',86400)),
    },
    bcrypt:{
        saltRounds:parseInt(required('BCRYPT_SALT_ROUNDS',12)),
    },
    host:{
        port:parseInt(required('HOST_PORT',8080)),
    },
    db:{
        host:required('DB_HOST'),
        user:required('DB_USER'),
        database:required('DB_DATABASE'),
        password:required('DB_PASSWORD'),
    },
};