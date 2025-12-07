import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./sections/Footer/Footer";
import PublicRoutes from "./Routes/PublicRoutes";
import ProtectedRoutes from "./Routes/ProtectedRoutes"; 


export default function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <div className="site-container">
          <main className="main">
            <PublicRoutes/>
            <ProtectedRoutes/>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
