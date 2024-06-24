import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Print from './Print'
function Data() {
  const [Data, SetData] = useState([])
  async function downloadData() {
    const response = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    // console.log(response)
    const response2 = response.data.data
    // console.log(response2)
    const Final = response2.map((r) => {
      return {
        Nation: r.Nation,
        Year: r.Year,
        Population: r.Population
      }
    })
    SetData(Final)
  }
  useEffect(() => { downloadData() })
  return (
    <div>
      <h1>Nation Data</h1>
      {Data.map((p) => <Print Nation={p.Nation} Year={p.Year} Population={p.Population} />)}
    </div>
  )
}

export default Data
