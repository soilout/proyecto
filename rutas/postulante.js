import { Router } from 'express'
import controlador from '../controlador/postulante.js'

export const router = Router()

router.post('/:id', controlador.getPostulante)//Con post por motivos de seguridad
router.post('/', controlador.postPostulante)
//Actualizar me imagino que no habra ???
router.delete('/:id', controlador.deletePostulante)

