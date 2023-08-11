import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Spinner from "./components/Spinner";
import NotFound from "./components/NotFound";
import HeroPage from "./pages/HeroPage";
import { loadUser } from "./store/userSlice";
import Contact from "./pages/Contact";
import { useDispatch, useSelector } from "react-redux";
import UserOption from "./pages/user/UserOption";
import Profile from "./pages/user/Profile";

function App() {
  const dispatch = useDispatch();
  const { user,isLoggedIn } = useSelector((state) => state.user);

  console.log(user,'app')
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
    {isLoggedIn && <UserOption user={user}/>}
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HeroPage />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
