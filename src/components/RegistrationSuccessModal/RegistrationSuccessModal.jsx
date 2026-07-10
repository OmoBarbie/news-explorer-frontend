import "./RegistrationSuccessModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegistrationSuccessModal({
  isOpen,
  handleCloseModal,
  title,
  buttonText,
  altText,
  handleOpenLogin,
}) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      title={title}
      buttonText={buttonText}
      altText={altText}
      handleAlternate={handleOpenLogin}
      renderSubmit={false}
    ></ModalWithForm>
  );
}

export default RegistrationSuccessModal;
