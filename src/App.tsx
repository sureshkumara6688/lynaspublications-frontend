
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./Components/Category"
import Detailspage from "./Components/Detailspage"
import Homepage from "./Components/Homepage"
import Menubar from "./Shared/Menubar"
import Footer from "./Shared/Footer"
import Admin from "./Components/Admin/admin";
import Contactus from "./Components/Contact us/contact";
import NotFound from "./Components/NotFound"
//  import ContactForm from"./Components/NotFound copy"

function App() {
  return (
    <>
      <BrowserRouter>
        <Menubar />
        <Routes>
          <Route path='/' element={<Homepage />}> </Route>
          <Route path='details/:bookname' element={<Detailspage />}> </Route>
          <Route path='/category/:categoryname' element={<Category />}> </Route>
          <Route path='/admin' element={<Admin />}> </Route>
          <Route path='/contact' element={<Contactus />}> </Route>
          <Route path='*' element={<NotFound />}/>
           {/* <Route path='send' element={< ContactForm/>}/>  */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
