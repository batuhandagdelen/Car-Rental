import type { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen relative overflow-hidden">
        {/* arka plan */}
        <div className="fixed inset-0 -z-10 bg-linear-to-br from-dark-bg via-black-100 to-dark-bg" />
        <div
          className="fixed top-20 left-20 w-72 h-72 bg-primary-blue/20 rounded-full blur-xl -z-10 animate-pulse
        "
        />

        <div
          className="fixed bottom-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-xl -z-10 animate-pulse delay-100
        "
        />

        <Header />
        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
