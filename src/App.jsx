import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./page/Main";
import CountryDetails from "./page/CountryDetails";

export default function App() {
  return (
    <div className="text-[#111517] font-nunito dark:text-white min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/country/:id" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}
