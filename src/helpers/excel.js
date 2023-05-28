export function createTitleCells (worksheet, workbook) {
  const cells = [
    {
      name: '#',
      width: 3
    },
    {
      name: 'IMEI',
      width: 20
    },
    {
      name: 'ICCID',
      width: 23
    },
    {
      name: 'NUM CEL',
      width: 15
    },
    {
      name: 'MARCA Y MODELO',
      width: 25
    },
    {
      name: 'FECHA DE VENTA',
      width: 18
    },
    {
      name: 'PROMOTOR',
      width: 35
    },
    {
      name: 'SUCURSAL',
      width: 22
    },
    {
      name: 'NUMERO DE EMPLEADO',
      width: 24
    }
  ]
  const style = workbook.createStyle({
    font: {
      size: 12,
      bold: true
    },
    alignment: {
      horizontal: 'left'
    }
  })

  cells.forEach((cell, i) => {
    worksheet.cell(1, i + 1).string(cell.name).style(style)
    worksheet.column(i + 1).setWidth(cell.width)
  })
}

export function createContentCells (worksheet, workbook, data) {
  const style = workbook.createStyle({
    font: {
      size: 12
    },
    alignment: {
      horizontal: 'left'
    },
    numberFormat: '###0'
  })

  data.forEach((registerData, i) => {
    const { imei, iccid, number, brand, model, date } = registerData

    worksheet.cell(i + 2, 1).number(i + 1).style(style)
    worksheet.cell(i + 2, 2).number(Number(imei)).style(style)
    worksheet.cell(i + 2, 3).number(Number(iccid)).style(style)
    worksheet.cell(i + 2, 4).number(Number(number)).style(style)
    worksheet.cell(i + 2, 5).string(`${brand} ${model}`.toUpperCase()).style(style)
    worksheet.cell(i + 2, 6).string(date).style(style)
    worksheet.cell(i + 2, 7).string('RODRÍGUEZ NARANJO ARIANA BELEM').style(style)
    worksheet.cell(i + 2, 8).string('6680 MEGA LAGO').style(style)
    worksheet.cell(i + 2, 9).string('EMPLEADO 105781').style(style)
  })
}
