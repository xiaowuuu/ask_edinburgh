use ask_edinburgh;
db.dropDatabase();

db.user.insertOne([
  {
    "name":"user",
    "questions":[]
  }
])