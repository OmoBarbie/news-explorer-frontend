import LoginModal from "../LoginModal";

function LoginModal({ isOpen, onClose }) {
  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose}>
      <h2>Sign In</h2>
      <p>Login form goes here</p>
    </ModalWithForm>
  );
}

export default LoginModal;
