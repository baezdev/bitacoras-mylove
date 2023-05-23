import { useState, useEffect } from 'react'
import { getRegisters } from '../service/bitacoras'

export function useBitacoras () {
  const [listBitacoras, setListBitacoras] = useState([])
  const [loading, setLoading] = useState(true)

  const getAllRegister = async () => {
    try {
      const data = await getRegisters()
      setListBitacoras(data)
      setLoading(false)
    } catch (err) {
      throw new Error(err)
    }
  }

  useEffect(() => {
    getAllRegister()
  }, [])

  return {
    listBitacoras, loading
  }
}
