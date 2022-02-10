const Movies = require('../models/movies')

//*********** */ Read CRUD********************
module.exports.getAll = async (req, res) => {
    try {
        const docs = await Movies.find().sort({ "createdAt": -1 });

        let obj = {
            results: docs,
            status: true
        }
        res.status(200).json(obj);
    }
    catch (err) {
        let obj = {
            status: false,
            message: "Internal Server Error",
            error: err
        }
        return res.status(400).json(obj);
    }
}

// *********** Create CRUD **************
module.exports.insertmovie = async (req, res) => {

    try {
        let req_obj = req.body;

        console.log('req_obj', req_obj)

        const obj = await Movies(req_obj).save();
        res.status(200).json(obj);
    }
    catch (err) {
        let obj = {
            status: false,
            message: "Internal Server Error",
            error: err
        }
        return res.status(400).json(obj);
    }
}

// **************Update CRUD******************
module.exports.updatemovie = async (req, res) => {

    try {
       console.log('req.para',req)

        await Movies.findOneAndUpdate({ "_id": req.params.id }, req.body);
            let obj = {
                status: true,
                message: "Update Successfully"
            }
            res.status(200).json(obj);
    }
    catch (err) {
        let obj = {
            status: false,
            message: "Internal Server Error",
            error: err
        }
        return res.status(400).json(obj);
    }
}

// ***********Delete CRUD*****************
module.exports.deletemovie = async (req, res) => {

    try {
       console.log('req.para',req.params.id)

        await Movies.findOneAndRemove({ "_id": req.params.id });
            let obj = {
                status: true,
                message: "Delete Data Successfully"
            }
            res.status(200).json(obj);
    }
    catch (err) {
        let obj = {
            status: false,
            message: "Internal Server Error",
            error: err
        }
        return res.status(400).json(obj);
    }
}