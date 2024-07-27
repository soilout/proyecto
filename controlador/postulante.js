import { ObjectId } from 'mongodb'
import {db} from '../servicio/db.js'
import { schemaPostulante } from '../validaciones/postulante.js'

const getPostulante = async (req, res)=>{
    try{

    }
    catch(error){
        console.log('error en getPostulante: ' + error)
    }
}
const postPostulante = async (req, res)=>{
    try{
        const newPost = {...req.body}
        try{
            await schemaPostulante.validateAsync(newPost)
        }
        catch(error){
            console.log('error en getPostulante joi: '+ error)
            res.send(false)
            
        }
        await db.collection('postulantes').insertOne(newPost)
        res.send(newPost)
    }
    catch(error){
        console.log('error en postPostulante: ' + error)
    }
}
const deletePostulante = async (req, res)=>{
    try{
        const id = req.params.id
        await db.collection('postulantes').deleteOne({id: ObjectId.createFromHexString(id)})
        res.send('Borrado')
    }
    catch(error){
        console.log('error en deletePostulante: ' + error)
    }
}

export default{
    getPostulante,
    postPostulante,
    //actualizar me imagino que no habra ???
    deletePostulante
}