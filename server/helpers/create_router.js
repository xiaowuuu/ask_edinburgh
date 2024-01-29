const express = require('express');
const ObjectID = require("mongodb").ObjectID;

const createRouter = function (collection) {
    const router = express.Router();
    router.get("/", (req, res) => {
        collection
        .find()
        .toArray()
        .then((docs) => {
            res.json(docs);
        }).catch(
            (err) => {
                res.status(500);
                res.json({ status: 500, error: err})
            });
    });

    router.get("/:id", (req, res)=> {
        const someId = req.params.id;
        collection.findOne({_id: ObjectID(someId)})
        .then((doc)=> {
            res.json(doc);
        }).catch(
            (err) => {
                res.status(500);
                res.json({ status: 500, error: err});
            }
        )

    });
    
    router.put("/:id", (req, res) => { console.log(req.body, req.params.id)
        collection.findOneAndUpdate(
            {_id: ObjectID(req.params.id)},
            { $set: req.body}
        ).then((doc)=> {
            console.log(doc)
            collection.findOne({_id: ObjectID(req.params.id)})
        .then((doc)=> {
            res.json(doc);
        }).catch(
            (err) => {
                res.status(500);
                res.json({ status: 500, error: err});
            }
        )
            
      }).catch(
        (err) => {
            res.status(500);
            res.json({ status: 500, error: err});
        }
    )})
      return router;

}


module.exports = createRouter;