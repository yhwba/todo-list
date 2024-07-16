import { BrowserRouter, Route, Routes } from "react-router-dom"
import ToDoList from "./routes/ToDoList";



function Router() {
   return <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
         <Route path="/" element={<ToDoList />} />
      </Routes>
   </BrowserRouter>
}
export default Router;