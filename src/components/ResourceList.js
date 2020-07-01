import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([])

  useEffect(() => {
    ;(async (resource) => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      )
      setResources(res.data)
    })(resource)
  }, [resource])

  return (
    <ul>
      {resources.map((record) => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  )
}

export default ResourceList
