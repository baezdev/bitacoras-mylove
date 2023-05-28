export function splitForQuincenas (quincena, bitacora) {
  const quincenas = {
    first: {
      init: 1,
      finish: 15
    },
    second: {
      init: 15,
      finish: 31
    }

  }

  const isFirstQuincena = day => day >= quincenas.first.init && day < quincenas.first.finish
  const isSecondQuincena = day => day >= quincenas.second.init && day < quincenas.second.finish

  let result = []
  if (quincena === 1) {
    const firstQuincena = bitacora?.filter(item => {
      const day = item?.date?.split('-')[2]
      return isFirstQuincena(day)
    })

    result = firstQuincena
  } else {
    const secondQuincena = bitacora?.filter(item => {
      const day = item.date.split('-')[2]
      return isSecondQuincena(day)
    })

    result = secondQuincena
  }

  return sortedForDate(result)
}

const sortedForDate = (arr) => {
  return arr?.sort((x, y) => x.date.localeCompare(y.date))
}
