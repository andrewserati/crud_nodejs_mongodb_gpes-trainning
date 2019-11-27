const mongoose = require('mongoose');

const CoroteModel = require('./../models/corote');

class Corote{
    
    get(req, res) {
        CoroteModel.find({}, (error, corote) => {
            if (error)
                res.send(error)
            else
                res.json({ data: corote })
        })
    }

    getByID(req, res){
        CoroteModel.findById(req.params.id, (error, corote) => {
            if(error)
                res.send(error)
            else
                res.json({data: corote})
        })
    }

    create(req, res){
        CoroteModel.create(req.body, (error, corote) => {
            if(error)
                res.send(error)
            else
                res.json({message: 'Corote adicionado com sucesso!', data: corote})
        })
    }

    update(req, res){
        CoroteModel.updateOne({_id: req.params.id}, {$set: req.body}, (error, corote) => {
            if(error)
                res.send(error)
            else
                res.json({message: 'Corote atualizado com sucesso!', data: corote})
        })
    }

    delete(req, res){
        CoroteModel.deleteOne({_id: req.params.id}, (error, corote) => {
            if (error)
                res.send(error)
            else
                res.json({message: 'Corote deletado com sucesso!', data: corote})
        })
    }

}

module.exports = new Corote()