import { useDispatch } from 'react-redux'
import {DeleteCategory} from '../../Redux/Actions/CategoryActions'
import { useState } from 'react'
import {notify} from '../../Components'

function DeleteEditecategory() {


const dispatch = useDispatch()
const [ID,setID] = useState('')

const DeleteHandeller =(id)=>{
  dispatch(DeleteCategory(id))
  notify('success',)
}

  return (
    [ID,setID,DeleteHandeller]
  )
}

export default DeleteEditecategory