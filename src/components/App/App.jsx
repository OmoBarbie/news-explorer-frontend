import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";

import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegistrationSuccessModal from "../RegistrationSuccessModal/RegistrationSuccessModal";

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenLogin = () => setActiveModal("login");
  const handleOpenRegister = () => setActiveModal("register");
  const handleRegistrationSuccess = () =>
    setActiveModal("registration-success");
  const handleCloseModal = () => setActiveModal(null);

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
          <Route
            path="/"
            element={
              <Main
                handleLoginClick={handleOpenLogin}
                handleCloseModal={handleCloseModal}
              />
            }
          />
          <Route path="/saved-news" element={<SavedNews />} />
        </Routes>
      </BrowserRouter>

      {/* MODALS LIVE HERE */}
      {activeModal === "login" && (
        <LoginModal
          isOpen={true}
          handleCloseModal={handleCloseModal}
          handleOpenRegister={handleOpenRegister}
          title={"Sign in"}
          buttonText={"Sign in"}
          altText={"Sign up"}
        />
      )}
      {activeModal === "register" && (
        <RegisterModal
          isOpen={true}
          handleCloseModal={handleCloseModal}
          handleOpenLogin={handleOpenLogin}
          handleRegistrationSuccess={handleRegistrationSuccess}
          title={"Sign up"}
          buttonText={"Sign up"}
          altText={"Sign in"}
        />
      )}
      {activeModal === "registration-success" && (
        <RegistrationSuccessModal
          isOpen={true}
          handleCloseModal={handleCloseModal}
          handleOpenLogin={handleOpenLogin}
          title={"Registration successfully completed!"}
          buttonText={"Continue to Login"}
          altText={"Sign in"}
          renderSubmit={false}
        />
      )}
    </>
  );
}

export default App;
