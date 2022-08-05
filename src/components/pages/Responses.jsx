import React from 'react'
import { useParams } from 'react-router-dom'

const Responses = ({user}) => {
  const {formId} = useParams()

  return (
    <div>Responses</div>
  )
}

export default Responses