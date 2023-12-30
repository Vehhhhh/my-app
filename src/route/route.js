import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../layout/Home"
import Test from "../layout/Testing"
import HomePage from "../component/Home/Home"
import Login from "../component/Home/Login"
import Register from "../component/Home/Register"
import Home2 from "../component/Home/SecondHome"
function routing(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/" element={<HomePage />} />
                <Route path="/schome" element={<Home2 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default routing