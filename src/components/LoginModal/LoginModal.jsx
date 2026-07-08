import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose }) {
  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose}>
      <h2>Sign In</h2>
      <p>Login form goes here</p>
    </ModalWithForm>
  );
}

export default LoginModal;
