import joi from 'joi'

const schemaDomicilio = joi.object({
    "calle": joi.string()
        .min(3)
        .max(35)
        .required(),
    "altura": joi.string()
        .min(1)
        .max(10)
        .required(),
    "piso": joi.string()
        .min(1)
        .max(3),
    "departamento": joi.string()
        .min(1)
        .max(35)
        .when('piso', { not: joi.valid(null,''), then: joi.required() }),
    "cuerpo": joi.string(),//Preguntar que es
    "unidadFuncional": joi.string(),//Preguntar que es
    "codigoPostal": joi.string()
        .min(4)
        .max(8)
        .required(),
    "provincia": joi.string()
        .valid('buenos aires', 'buenos aires capital federal', 'catamarca', 'chaco', 'chubut', 'cordoba', 'corrientes', 'entre rios', 'formosa', 'jujuy', 'la pampa', 'la rioja', 'mendoza', 'misiones', 'neuquen', 'rio negro', 'salta', 'san juan', 'san luis', 'santa cruz', 'santa Fe', 'santiago del estero', 'tierra del fuego', 'antartida', 'tucuman')
        .required(),
    "localidad": joi.string()
        .min(3)
        .max(5)
        .required()
})

const schemaTelefono= joi.object({
    "fijo":joi.string()
        .min(10)
        .max(10),
    "celular":joi.string()
        .min(10)
        .max(10)
        .when('fijo', {is:joi.any().valid(null, ''), then: joi.required()})
})

export const schemaPostulante = joi.object({
    "estado": joi.string()
        .valid('personaFisica', 'consorcista', 'consorcio')
        .required(),
    "nombre": joi.string()
        .min(2)
        .max(35)
        .when('estado', { is: 'personaFisica', then: joi.required() }),
    "apellido": joi.string()
        .min(2)
        .max(35)
        .when('estado', { is: 'personaFisica', then: joi.required() }),
    "dni": joi.string()
        .min(8)
        .max(8)
        .when('estado', { is: 'personaFisica', then: joi.required() }),
    "fechaDeNacimiento": joi.date()
        .when('estado', { is: 'personaFisica', then: joi.required() }),
    "email": joi.string().email()
        .when('estado', { is: 'personaFisica', then: joi.required() }),
    "situacion": joi.string()
        .when('estado', { is: 'personaFisica', then: joi.required().valid('propietario', 'inquilino','ocupante', 'otro') })
        .when('estado', { is: 'consorcista', then: joi.required().valid('propietario', 'inquilino', 'otro') }),
    "domicilio": schemaDomicilio
        .when('estado', {is: 'personaFisica', then: joi.required()}),
    "telefono": schemaTelefono
        .when('estado', {is: 'personaFisica', then: joi.required()})
}).options({ abortEarly: false })

