import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({
  isOpen,
  handleCloseModal,
  handleOpenRegister,
  title,
  buttonText,
  altText,
}) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      handleAlternate={handleOpenRegister}
      title={title}
      buttonText={buttonText}
      altText={altText}
    >
      <label className="modal__label">
        Email
        <input className="modal__input" type="email" placeholder="Email" />
      </label>
      <div className="modal__warning">Invalid email address</div>
      <label className="modal__label">
        Password
        <input className="modal__input" type="password" />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
