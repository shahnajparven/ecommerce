import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Spinner from "./components/Spinner";
import NotFound from "./components/NotFound";
import HeroPage from "./pages/HeroPage";
import { loadUser } from "./store/authSlice";
import Contact from "./pages/Contact";
import { useDispatch, useSelector } from "react-redux";
import UserOption from "./pages/user/UserOption";
import Profile from "./pages/user/Profile";
import { toast } from "react-toastify";
import  Dashboard  from "./pages/admin/Dashboard";
import ProductList from "./pages/admin/ProductList";
import NewProduct from "./pages/admin/NewProduct";
import UserList from "./pages/admin/UserList";

function App() {
  const dispatch = useDispatch();
  const { isLoading,error, message,user,isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message, isLoggedIn]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
  
     <>
      {isLoading ? (
        <p> Loading</p>
      ) : (
        <>
    <HeroPage/>
    {isLoggedIn && <UserOption user={user}/>}
      <Suspense fallback={<Spinner />}>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          
            <Route path="/profile" element={<Profile/>} />
           
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/dashboard/productList" element={<ProductList/>} />
            <Route path="/dashboard/newProduct" element={<NewProduct/>} />
            <Route path="/dashboard/userList" element={<UserList/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
       </>
      )}
    </>
  );
}

export default App;
