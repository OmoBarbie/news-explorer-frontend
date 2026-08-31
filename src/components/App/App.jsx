import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";

import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegistrationSuccessModal from "../RegistrationSuccessModal/RegistrationSuccessModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../../context/CurrentUserContext";

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpenLogin = () => setActiveModal("login");
  const handleOpenRegister = () => setActiveModal("register");
  const handleRegistrationSuccess = () =>
    setActiveModal("registration-success");
  const handleCloseModal = () => setActiveModal(null);
  const handleLogIn = () => {
    setIsLoggedIn(true);
    setActiveModal(null);
  };

  console.log(savedArticles);
  const onSignOut = () => {
    setIsLoggedIn(false);
    setSavedArticles([]);
  };

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
      <CurrentUserContext.Provider value={{ isLoggedIn }}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  handleLoginClick={handleOpenLogin}
                  handleCloseModal={handleCloseModal}
                  setSavedArticles={setSavedArticles}
                  isLoggedIn={isLoggedIn}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  onSignOut={onSignOut}
                />
              }
            />
            <Route
              path="/saved-news"
              element={
                <ProtectedRoute>
                  <SavedNews
                    savedArticles={savedArticles}
                    onSignOut={onSignOut}
                  />
                </ProtectedRoute>
              }
            />
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
            handleSubmit={handleLogIn}
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
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
