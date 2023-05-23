import xl from 'excel4node'

export function createExcel () {
  const wb = new xl.Workbook()
  const ws = wb.addWorksheet('Bitacora')

  const style = wb.createStyle({
    font: {
      color: '#FF0800',
      size: 18
    }
  })

  ws.cell(1, 1).string('IMEI').style(style)
  console.log('Excel generado')

  wb.write('Bitacoras.xlsx', (err, state) => {
    if (err) {
      console.error(err)
    } else {
      console.log(state) // Prints out an instance of a node.js fs.Stats object
    }
  })
}
