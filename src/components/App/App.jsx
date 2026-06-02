import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";

import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleOpenLogin = () => setActiveModal("login");
  const handleOpenRegister = () => setActiveModal("register");
  const handleCloseModal = () => setActiveModal("");

  // ESC key close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main onLoginClick={handleOpenLogin} />} />
          <Route path="/saved-news" element={<SavedNews />} />
        </Routes>
      </BrowserRouter>

      {/* MODALS LIVE HERE */}
      <LoginModal isOpen={activeModal === "login"} onClose={handleCloseModal} />

      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default App;
