import{getUsers} from '../database/database.js'
import MongoDb from 'mongodb'


const ObjectId=MongoDb.ObjectId;
export async function findByUsername(username) {
  return getUsers().findOne({username})
  .then(mapOptionalUser); 
  
}

export async function findById(id) {
  return getUsers()
  .findOne({_id:new MongoDb.ObjectId(id)})
  .then(mapOptionalUser)
}

export async function createUser(user) {
  return getUsers().insertOne(user).then((data)=>{data.insertedId.toString(); //
  })
}

function mapOptionalUser(user){
  user?{...user,id: user._id}:user.toString();
}

//데이터 베이스를 다루는 코드를 담는대신 DB와 상호작용하는 코드를 AUTH와 tweet이라는 가가의 모듈로
//고립,캡슐화 시켰기때문에 DB를 바꿔도 app을 건드리지 않고 한곳만 수정하면됨 (보수성이 강해짐) 