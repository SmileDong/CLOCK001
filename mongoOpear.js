"use strick"

const MongoClient = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/student';

MongoClient.connect(url, function(err, db) {
  const collection = db.collection("stu");

  // collection.insertMany([{
  //     name:'张辽',
  //     age:36,
  //     gender:'男'
  // }],(err,result)=>{
  //   if(err){
  //     console.log(err)
  //   }
  //   console.log("添加成功。。。")
  // })

  // collection.insertOne({
  //     name:'张辽123',
  //     age:36,
  //     gender:'男'
  // },(err,result)=>{
  //   if(err){
  //     console.log(err)
  //   }
  //   console.log("添加成功。。。")
  // })

// collection.updateMany({name:{$regex:'张'}},{$set:{
//   age:18
// }},(err,result)=>{
//   if(err){
//     console.log(err)
//   }
//   console.log("修改成功。。。")
// })
// collection.updateOne({name:'张辽'},{$set:{
//   age:40
// }},(err,result)=>{
//   if(err){
//     console.log(err)
//   }
//   console.log("修改成功。。。")
// })
// collection.deleteOne({name:'zs'},(err,result)=>{
//   if(err){
//     console.log(err)
//   }
//   console.log("删除成功。。。")
// })
  // collection.find({name:{$regex:"张"}}).toArray((err,doc)=>{
  //   console.log(doc)
  // })

  // collection.findOne({name:'赵云'},(err,doc)=>{
  //   console.log(doc)
  // })
 collection.find().skip(3).limit(2).toArray((err,doc)=>{
  console.log(doc)
 })

  db.close();

});


  
