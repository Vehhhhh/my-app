import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../component/Home/Home"
import Login from "../component/Home/Login"
import Register from "../component/Home/Register"
import Home2 from "../component/Home/SecondHome"
import Return from "../component/Home/Return"
import Track from "../component/Home/Track"
function routing(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/schome" element={<Home2 />} />
                <Route path="/Return" element={<Return/>}/>
                <Route path="/Track" element={<Track/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default routing