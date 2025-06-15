import { Link, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";

export default function App() {
  return (
    <>
      <header className="flex flex-col justify-center items-center h-28">
        <h1 className="text-3xl font-bold">1세대 포켓몬 도감</h1>
        <nav className="flex text-lg gap-4">
          <Link to="/">메인</Link>
          <Link to="/favorites">찜목록</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}
