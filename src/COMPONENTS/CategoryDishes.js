import React, { useEffect, useState } from 'react'
import CategoryDetails from './CategoryDetails'

function CategoryDishes() {
  const [data, setData] = useState([])
  async function fetchData()
  {
    
    await fetch('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099')
    .then((res) => res.json())
    .then((data) => setData(data))
  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log("data: ", data)

  return (
    <div>
      {data.map((item) => (
        <div>
          <CategoryDetails item={item.table_menu_list} />
        </div>
      ))}
    </div>
  )
}

export default CategoryDishes