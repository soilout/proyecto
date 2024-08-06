import xlsx from 'xlsx-populate'

const excelFisica = async (datos, workbook, i) => {

    const { nombre, apellido, dni, fechaDeNacimiento, email, situacion } = datos
    const { calle, altura, piso, departamento, cuerpo, unidadFuncional, codigoPostal, provincia, localidad } = datos.domicilio
    const { fijo, celular } = datos.telefono

    workbook.sheet(0).cell('A' + (i + 1)).value('Estado')
    workbook.sheet(0).cell('A' + (i + 2)).value('Persona Fisica')
    workbook.sheet(0).cell('B' + (i + 1)).value('Nombre y Apellido')
    workbook.sheet(0).cell('B' + (i + 2)).value(nombre + ' ' + apellido)
    workbook.sheet(0).cell('C' + (i + 1)).value('DNI')
    workbook.sheet(0).cell('C' + (i + 2)).value(dni)
    workbook.sheet(0).cell('D' + (i + 1)).value('Fecha De Nacimiento')
    workbook.sheet(0).cell('D' + (i + 2)).value(fechaDeNacimiento)
    workbook.sheet(0).cell('E' + (i + 1)).value('E-Mail')
    workbook.sheet(0).cell('E' + (i + 2)).value(email)
    workbook.sheet(0).cell('F' + (i + 1)).value('Situacion')
    workbook.sheet(0).cell('F' + (i + 2)).value(situacion)
    workbook.sheet(0).range('G' + (i + 1) + ':G' + (i + 2)).value('Domicilio')
    workbook.sheet(0).cell('H' + (i + 1)).value('Calle')
    workbook.sheet(0).cell('H' + (i + 2)).value(calle)
    workbook.sheet(0).cell('I' + (i + 1)).value('Altura')
    workbook.sheet(0).cell('I' + (i + 2)).value(altura)
    workbook.sheet(0).cell('J' + (i + 1)).value('Piso')
    workbook.sheet(0).cell('J' + (i + 2)).value(piso)
    workbook.sheet(0).cell('K' + (i + 1)).value('Departamento')
    workbook.sheet(0).cell('K' + (i + 2)).value(departamento)
    workbook.sheet(0).cell('L' + (i + 1)).value('Cuerpo')
    workbook.sheet(0).cell('L' + (i + 2)).value(cuerpo)
    workbook.sheet(0).cell('M' + (i + 1)).value('Unidad Funcional')
    workbook.sheet(0).cell('M' + (i + 2)).value(unidadFuncional)
    workbook.sheet(0).cell('N' + (i + 1)).value('Codigo Postal')
    workbook.sheet(0).cell('N' + (i + 2)).value(codigoPostal)
    workbook.sheet(0).cell('O' + (i + 1)).value('Provincia')
    workbook.sheet(0).cell('O' + (i + 2)).value(provincia)
    workbook.sheet(0).cell('P' + (i + 1)).value('Localidad')
    workbook.sheet(0).cell('P' + (i + 2)).value(localidad)
    workbook.sheet(0).range('Q' + (i + 1) + ':Q' + (i + 2)).value('Telefono')
    workbook.sheet(0).cell('R' + (i + 1)).value('Fijo')
    workbook.sheet(0).cell('R' + (i + 2)).value(fijo)
    workbook.sheet(0).cell('S' + (i + 1)).value('Celular')
    workbook.sheet(0).cell('S' + (i + 2)).value(celular)
}
const excelConsorcistas = async (datos, workbook, i) => {

    const { razonSocial, situacion } = datos
    const { calle, altura, piso, departamento, cuerpo, unidadFuncional, codigoPostal, provincia, localidad } = datos.domicilioReal
    const { nombre, apellido, dni, fechaDeNacimiento, email } = datos.representanteLegal
    const { fijo, celular } = datos.representanteLegal.telefono
    const rDomi = datos.representanteLegal.domicilio

    workbook.sheet(0).cell('A' + (i + 1)).value('Estado')
    workbook.sheet(0).cell('A' + (i + 2)).value('Persona Juridica Constorcistas')
    workbook.sheet(0).cell('B' + (i + 1)).value('Razon Social')
    workbook.sheet(0).cell('B' + (i + 2)).value(razonSocial)
    workbook.sheet(0).cell('C' + (i + 1)).value('Situacion')
    workbook.sheet(0).cell('C' + (i + 2)).value(situacion)
    workbook.sheet(0).range('D' + (i + 1) + ':D' + (i + 2)).value('Domicilio Real')
    workbook.sheet(0).cell('E' + (i + 1)).value('Calle')
    workbook.sheet(0).cell('E' + (i + 2)).value(calle)
    workbook.sheet(0).cell('F' + (i + 1)).value('Altura')
    workbook.sheet(0).cell('F' + (i + 2)).value(altura)
    workbook.sheet(0).cell('G' + (i + 1)).value('Piso')
    workbook.sheet(0).cell('G' + (i + 2)).value(piso)
    workbook.sheet(0).cell('H' + (i + 1)).value('Departamento')
    workbook.sheet(0).cell('H' + (i + 2)).value(departamento)
    workbook.sheet(0).cell('I' + (i + 1)).value('Cuerpo')
    workbook.sheet(0).cell('I' + (i + 2)).value(cuerpo)
    workbook.sheet(0).cell('J' + (i + 1)).value('Unidad Funcional')
    workbook.sheet(0).cell('J' + (i + 2)).value(unidadFuncional)
    workbook.sheet(0).cell('K' + (i + 1)).value('Codigo Postal')
    workbook.sheet(0).cell('K' + (i + 2)).value(codigoPostal)
    workbook.sheet(0).cell('L' + (i + 1)).value('Provincia')
    workbook.sheet(0).cell('L' + (i + 2)).value(provincia)
    workbook.sheet(0).cell('M' + (i + 1)).value('Localidad')
    workbook.sheet(0).cell('M' + (i + 2)).value(localidad)
    workbook.sheet(0).range('N' + (i + 1) + ':N' + (i + 2)).value('Represante Legal')
    workbook.sheet(0).cell('O' + (i + 1)).value('Nombre y Apellido')
    workbook.sheet(0).cell('O' + (i + 2)).value(nombre + ' ' + apellido)
    workbook.sheet(0).cell('P' + (i + 1)).value('DNI')
    workbook.sheet(0).cell('P' + (i + 2)).value(dni)
    workbook.sheet(0).cell('Q' + (i + 1)).value('Fecha De Nacimiento')
    workbook.sheet(0).cell('Q' + (i + 2)).value(fechaDeNacimiento)
    workbook.sheet(0).cell('R' + (i + 1)).value('E-Mail')
    workbook.sheet(0).cell('R' + (i + 1)).value(email)
    workbook.sheet(0).range('S' + (i + 1) + ':S' + (i + 2)).value('Domicilio Representante Legal')
    workbook.sheet(0).cell('T' + (i + 1)).value('Calle')
    workbook.sheet(0).cell('T' + (i + 2)).value(rDomi.calle)
    workbook.sheet(0).cell('U' + (i + 1)).value('Altura')
    workbook.sheet(0).cell('U' + (i + 2)).value(rDomi.altura)
    workbook.sheet(0).cell('V' + (i + 1)).value('Piso')
    workbook.sheet(0).cell('V' + (i + 1)).value(rDomi.piso)
    workbook.sheet(0).cell('W' + (i + 1)).value('Departamento')
    workbook.sheet(0).cell('W' + (i + 2)).value(rDomi.departamento)
    workbook.sheet(0).cell('X' + (i + 1)).value('Cuerpo')
    workbook.sheet(0).cell('X' + (i + 2)).value(rDomi.cuerpo)
    workbook.sheet(0).cell('Y' + (i + 1)).value('Unidad Funcional')
    workbook.sheet(0).cell('Y' + (i + 2)).value(rDomi.unidadFuncional)
    workbook.sheet(0).cell('Z' + (i + 1)).value('Codigo Postal')
    workbook.sheet(0).cell('Z' + (i + 2)).value(rDomi.codigoPostal)
    workbook.sheet(0).cell('AA' + (i + 1)).value('Provincia')
    workbook.sheet(0).cell('AA' + (i + 2)).value(rDomi.provincia)
    workbook.sheet(0).cell('AB' + (i + 1)).value('Localidad')
    workbook.sheet(0).cell('AB' + (i + 2)).value(rDomi.localidad)
    workbook.sheet(0).range('AC' + (i + 1) + ':AC' + (i + 2)).value('Telefono Representante Legal')
    workbook.sheet(0).cell('AD' + (i + 1)).value('Fijo')
    workbook.sheet(0).cell('AD' + (i + 2)).value(fijo)
    workbook.sheet(0).cell('AE' + (i + 1)).value('Celular')
    workbook.sheet(0).cell('AE' + (i + 2)).value(celular)
}

const excelConsorcios = async (datos, workbook, i) => {
    const { fechaConstitucion, uf } = datos
    const { calle, altura, piso, departamento, cuerpo, unidadFuncional, codigoPostal, provincia, localidad } = datos.domicilioReal
    const { nombre, apellido, dni, numeroRegistro, email } = datos.administrador
    const adT = datos.administrador.telefono
    const rep = datos.representante

    //Try await ????
    workbook.sheet(0).cell('A' + (i + 1)).value('Estado')
    workbook.sheet(0).cell('A' + (i + 2)).value('Persona Juridica Consorcios')
    workbook.sheet(0).cell('B' + (i + 1)).value('Fecha De Constitucion')
    workbook.sheet(0).cell('B' + (i + 2)).value(fechaConstitucion)
    workbook.sheet(0).cell('C' + (i + 1)).value('UF')
    workbook.sheet(0).cell('C' + (i + 2)).value(uf)
    workbook.sheet(0).range('D' + (i + 1) + ':D' + (i + 2)).value('Domicilio Real')
    workbook.sheet(0).cell('E' + (i + 1)).value('Calle')
    workbook.sheet(0).cell('E' + (i + 2)).value(calle)
    workbook.sheet(0).cell('F' + (i + 1)).value('Altura')
    workbook.sheet(0).cell('F' + (i + 2)).value(altura)
    workbook.sheet(0).cell('G' + (i + 1)).value('Piso')
    workbook.sheet(0).cell('G' + (i + 2)).value(piso)
    workbook.sheet(0).cell('H' + (i + 1)).value('Departamento')
    workbook.sheet(0).cell('H' + (i + 2)).value(departamento)
    workbook.sheet(0).cell('I' + (i + 1)).value('Cuerpo')
    workbook.sheet(0).cell('I' + (i + 2)).value(cuerpo)
    workbook.sheet(0).cell('J' + (i + 1)).value('Unidad Funcional')
    workbook.sheet(0).cell('J' + (i + 2)).value(unidadFuncional)
    workbook.sheet(0).cell('K' + (i + 1)).value('Codigo Postal')
    workbook.sheet(0).cell('K' + (i + 2)).value(codigoPostal)
    workbook.sheet(0).cell('L' + (i + 1)).value('Provincia')
    workbook.sheet(0).cell('L' + (i + 2)).value(provincia)
    workbook.sheet(0).cell('M' + (i + 1)).value('Localidad')
    workbook.sheet(0).cell('M' + (i + 2)).value(localidad)
    workbook.sheet(0).range('N' + (i + 1) + ':N' + (i + 2)).value('Administrador')
    workbook.sheet(0).cell('O' + (i + 1)).value('Nombre y Apellido')
    workbook.sheet(0).cell('O' + (i + 2)).value(nombre + ' ' + apellido)
    workbook.sheet(0).cell('P' + (i + 1)).value('DNI')
    workbook.sheet(0).cell('P' + (i + 2)).value(dni)
    workbook.sheet(0).cell('Q' + (i + 1)).value('Numero De Registro')
    workbook.sheet(0).cell('Q' + (i + 1)).value(numeroRegistro)
    workbook.sheet(0).cell('R' + (i + 1)).value('E-Mail')
    workbook.sheet(0).cell('R' + (i + 1)).value(email)
    workbook.sheet(0).range('S' + (i + 1) + ':S' + (i + 2)).value('Administrador Telefono')
    workbook.sheet(0).cell('T' + (i + 1)).value('Fijo')
    workbook.sheet(0).cell('T' + (i + 2)).value(adT.fijo)
    workbook.sheet(0).cell('U' + (i + 1)).value('Celular')
    workbook.sheet(0).cell('U' + (i + 2)).value(adT.celular)
    workbook.sheet(0).range('V' + (i + 1) + ':V' + (i + 2)).value('Representante')
    workbook.sheet(0).cell('W' + (i + 1)).value('Nombre y Apellido')
    workbook.sheet(0).cell('W' + (i + 2)).value(rep.nombre + ' ' + rep.apellido)
    workbook.sheet(0).cell('X' + (i + 1)).value('DNI')
    workbook.sheet(0).cell('X' + (i + 2)).value(rep.dni)
    workbook.sheet(0).cell('Y' + (i + 1)).value('Numero De Registro')
    workbook.sheet(0).cell('Y' + (i + 2)).value(rep.numeroRegistro)
    workbook.sheet(0).cell('Z' + (i + 1)).value('E-mail')
    workbook.sheet(0).cell('Z' + (i + 2)).value(rep.email)
    workbook.sheet(0).range('AA' + (i + 1) + ':AA' + (i + 2)).value('Representante Telefono')
    workbook.sheet(0).cell('AB' + (i + 1)).value('Fijo')
    workbook.sheet(0).cell('AB' + (i + 2)).value(rep.telefono.fijo)
    workbook.sheet(0).cell('AC' + (i + 1)).value('Celular')
    workbook.sheet(0).cell('AC' + (i + 1)).value(rep.telefono.celular)
}

const writeExcel = async datosArray => {
    console.log(datosArray.length)
    let i_aux = 2
    let i
    const workbook = await xlsx.fromBlankAsync()
    for (let ii = 0; ii < datosArray.length; ii++) {
        console.log(ii)
        if(ii === 0) i = 0
        else{
            i = ii + i_aux
            i_aux += 2
        }
        if (datosArray[ii].estado === 'personaFisica') {
            excelFisica(datosArray[ii], workbook, i)
        }
        else if (datosArray[ii].estado === 'consorcista') {
            excelConsorcistas(datosArray[ii], workbook, i)
        }
        else if (datosArray[ii].estado === 'consorcio') {
            excelConsorcios(datosArray[ii],workbook, i)
        }
    }
    workbook.sheet(0).cell('A1').value('aaaaa')
    const d = new Date()
    const date = d.getMonth() + '-' + d.getDate() + '-' + d.getFullYear()
    workbook.toFileAsync(`./${date}-Postulantes.xlsx`)
}

export default{
    writeExcel
}