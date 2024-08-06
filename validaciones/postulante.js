import joi from 'joi'


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
        .when('estado', { is: 'personaFisica', then: joi.required().valid('propietario', 'inquilino', 'ocupante', 'otro') })
        .when('estado', { is: 'consorcista', then: joi.required().valid('propietario', 'inquilino', 'otro') }),
    "domicilio": joi.object({
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
            .when('piso', { not: joi.valid(null, ''), then: joi.required() }),
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
        .when('estado', { is: 'personaFisica', then: joi.required() }),
    "telefono": joi.object({
        "fijo": joi.string()
            .min(10)
            .max(10),
        "celular": joi.string()
            .min(10)
            .max(10)
            .when('fijo', { is: joi.any().valid(null, ''), then: joi.required() })
            .required(),
    })
        .when('estado', { is: 'personaFisica', then: joi.required() }),
    "razonSocial": joi.string()
        .valid('', '', '', '')
        .when('estado', { is: 'consorcista', then: joi.required() }),
    "domicilioReal": joi.object({
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
            .when('piso', { not: joi.valid(null, ''), then: joi.required() }),
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
            .max(35)
            .required()
    })
        .when('estado', { is: joi.valid('contorcista', 'consorcio'), then: joi.required() }),
    "representanteLegal": joi.object({
        "nombre": joi.string()
            .min(2)
            .max(35)
            .required(),
        "apellido": joi.string()
            .min(2)
            .max(35)
            .required(),
        "dni": joi.string()
            .min(8)
            .max(8)
            .required(),
        "fechaDeNacimiento": joi.date()
            .required(),
        "domicilio": joi.object({
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
                .when('piso', { not: joi.valid(null, ''), then: joi.required() }),
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
            .required(),
        "telefono": joi.object({
            "fijo": joi.string()
                .min(10)
                .max(10),
            "celular": joi.string()
                .min(10)
                .max(10)
                .when('fijo', { is: joi.any().valid(null, ''), then: joi.required() })
        }).required(),
        "email": joi.string()
            .email()
            .required()
    })
        .when('estado', { is: 'consorcista', then: joi.required() }),
    "fechaConstitucion": joi.date()
        .when('estado', { is: 'consorcio', then: joi.required() }),
    "uf": joi.string()
        .min(1)
        .when('estado', { is: 'consorcio', then: joi.required() }),
    "administrador": joi.object({
        "nombre": joi.string()
            .min(2)
            .max(35)
            .required(),
        "apellido": joi.string()
            .min(2)
            .max(35)
            .required(),
        "dni": joi.string()
            .min(8)
            .max(8)
            .required(),
        "telefono": joi.object({
            "fijo": joi.string()
                .min(10)
                .max(10),
            "celular": joi.string()
                .min(10)
                .max(10)
                .when('fijo', { is: joi.any().valid(null, ''), then: joi.required() })
        }).required(),
        "email": joi.string()
            .email()
            .required(),
        "numeroRegistro": joi.string()
            .min(1)
            .required()
    }).when('estado', { is: 'consorcio', then: joi.required() }),
    "representante": joi.object({
        "nombre": joi.string()
            .min(2)
            .max(35)
            .required(),
        "apellido": joi.string()
            .min(2)
            .max(35)
            .required(),
        "dni": joi.string()
            .min(8)
            .max(8)
            .required(),
        "telefono": joi.object({
            "fijo": joi.string()
                .min(10)
                .max(10),
            "celular": joi.string()
                .min(10)
                .max(10)
                .when('fijo', { is: joi.any().valid(null, ''), then: joi.required() })
        }).required(),
        "email": joi.string()
            .email()
            .required(),
        "numeroRegistro": joi.string()
            .min(1)
            .required()
    }).when('estado', { is: 'consorcio', then: joi.required() }),
    "razonSocial":joi.string().min(3)
        .when('estado', {is: 'consorcista', then: joi.required()})

})//.options({ abortEarly: false })