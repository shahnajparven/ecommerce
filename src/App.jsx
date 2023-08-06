import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import "./index.css";
import Spinner from './pages/Spinner';
import Nav from './pages/Nav';
import NotFound from './components/NotFound';
const RequireAuth = lazy(() => import('./config/RequireAuth.jsx'));

function App() {
  return (
    <>
     <Suspense fallback={<Spinner />}>
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route
                    path="/"
                    element={
                     
                            <Nav />
                      
                    }
                >
                    <Route index element={<Home />} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
