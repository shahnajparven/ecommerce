import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Spinner from "./components/Spinner";
import NotFound from "./components/NotFound";
import MainComponent from "./pages/mainComponent";

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<MainComponent/>}>
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
