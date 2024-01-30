import express, {Request, Response} from 'express';
import {Collection, ObjectId} from 'mongodb';

const createRouter = function (collection: Collection) {
    const router = express.Router();
    router.get("/", async(req: Request, res: Response) => {
        try {
            const docs = await collection.find().toArray();
            res.json(docs);
        } catch (err) {
                res.status(500).json({status:500, error:err});
            }
    });

    router.get("/:id", async (req: Request, res: Response) => {
        const someId = req.params.id;
        try {
            const doc = await collection.findOne({ _id: new ObjectId(someId) });
            res.json(doc);
        } catch (err) {
            res.status(500).json({ status: 500, error: err });
        }
    });
    
    router.put("/:id", async (req: Request, res: Response) => {
        const id = req.params.id;
        try {
            const updatedDoc = await collection.findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: req.body },
            { returnDocument: 'after' }
            );
            // res.json(updatedDoc.value);
        } catch (err) {
            res.status(500).json({ status: 500, error: err });
        }
    });
    
    return router;
    }
    
    export default createRouter;