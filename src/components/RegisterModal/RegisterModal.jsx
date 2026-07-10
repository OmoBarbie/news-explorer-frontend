import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  isOpen,
  handleCloseModal,
  title,
  buttonText,
  altText,
  handleOpenLogin,
  handleRegistrationSuccess,
}) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      title={title}
      buttonText={buttonText}
      altText={altText}
      handleAlternate={handleOpenLogin}
      handleSubmit={handleRegistrationSuccess}
    >
      <label className="modal__label">
        Email
        <input className="modal__input" type="email" placeholder="Email" />
      </label>
      <label className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          placeholder="Enter password"
        />
      </label>
      <label className="modal__label">
        Username
        <input
          className="modal__input"
          type="text"
          placeholder="Enter your username"
        />
      </label>
      <div className="modal__warning modal__warning_position_center ">
        This email is not available
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
