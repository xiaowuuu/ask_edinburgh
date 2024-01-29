use ask_edinburgh;
db.dropDatabase();

db.user.insertOne([
  {
    "name":"user",
    "user_queries":{
      "question":[],
      "image_id":[],
      "answer":[]
    }
  }
]);