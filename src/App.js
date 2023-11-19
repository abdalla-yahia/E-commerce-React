import { RouterProvider } from "react-router-dom";
import {router} from './Routes/Router';
import { Footer } from "./Components";

function App() {
    
  return (
    <>
    <RouterProvider router={router}/>
    <Footer />
    </>
  )
}

export default App