import { db } from "../servicio/db.js"
import excel from '../servicio/excel.js'

const getExcel=async (req, res)=>{
    const datos = await db.collection('postulantes').find({}).toArray()
    excel.writeExcel(datos)
    res.send('sent :)')
}

export default{
    getExcel
}