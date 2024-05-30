import { Route, Routes } from "react-router-dom"
import { dataRouter } from "./data"
function RouterComponent() {
   return(
      <Routes>
         {dataRouter.map((elem, index) =>
            <Route key={index} path={elem.link} element={elem.element} />            
         )}
      </Routes>
   )
}
export default RouterComponent
