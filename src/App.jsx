import About from "./component/About" 
import Contact from "./component/Contact"
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import { BrowserRouter,Route,Routes } from "react-router-dom"          
function App(){
    return (
        <>
        
        <BrowserRouter>
        <h1>Hello this the demo website....</h1>
        <Navbar/>   
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
              
        </Routes>
        </BrowserRouter>
        
        </>
    )

}
export default App;
