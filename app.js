import express from 'express'
import config from './config.js'
import {router as postulante} from './rutas/postulante.js'
import {router as excel} from './rutas/excel.js'

const app = express()
app.set('port', config.PORT)

//middlewares
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Rutas
app.use('/api/postulante', postulante) //Donde ingresan los datos del formulario. No lo llame subscripcion por si acaso
app.use('/api/excel', excel)

app.use('/', (req, res)=>{
    res.view('.public/index.html')
})

const server = app.listen(app.get('port'),()=>{
    console.log('Servidor escuchando en puerto: ', app.get('port'))
})

server.on('error', error=> console.log('Error en servidor: ' + error.message))