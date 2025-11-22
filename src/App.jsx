
import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from 'react-redux';
import store from './store/store';
import { LanguageProvider } from './context/LanguageContext.jsx';
import Navbar from "./components/Navbar.jsx";
import Home from './pages/home.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import NotFound from "./pages/NotFound.jsx";
import SignIn from "./pages/Signin.jsx";
import SignUp from "./pages/SignUp.jsx";
import Cart from "./pages/cart.jsx";
import ContactUs from "./pages/ContactUs.jsx";
function App() {

  return (

    <Provider store={store}>
      <LanguageProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </Provider>
  )


}

export default App;