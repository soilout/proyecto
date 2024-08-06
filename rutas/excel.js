import { Router } from "express";
import controlador from '../controlador/excel.js'

export const router = Router()

router.post('/', controlador.getExcel)