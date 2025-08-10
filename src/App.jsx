import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Detail from "./pages/Detail";
import WatchList from "./pages/WatchList";
import { useDispatch } from "react-redux";
import { getWatchList } from "./redux/action"
import { useEffect } from "react";

const App = () => {
  // Dispatch kurulumu
  const dispatch = useDispatch();
  // Bileşen ekrana geldiğinde asekron thunk fonksiyonu tetikle
  useEffect(() => {
    dispatch(getWatchList());
  }, []);
  return (
  <BrowserRouter>
  <div className="p-5 md:p-10 lg:px-15 xl:px-20 flex flex-col min-h-screen"> 
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movie/:id" element={<Detail/>} />
      <Route path="/watch-list" element={<WatchList/>} />
    </Routes>
    <Footer/>
  </div>
  </BrowserRouter>  
  
  )
}

export default App
