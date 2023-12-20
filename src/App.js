import { RouterProvider } from "react-router-dom";
import {router} from './Routes/Router';
import { Footer } from "./Components";
import getAllCategories from './Redux/Actions/CategoryActions'
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
// const data = useSelector(state=>state.categories.categories.data)
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(getAllCategories())
},[dispatch])
// console.log(data)
  return (
    <>
    <RouterProvider router={router}/>
    <Footer />
    </>
  )
}

export default App