import "./RegisterModal.css";

function RegisterModal({ isOpen, onClose }) {
  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose}>
      <h2>Sign Up</h2>
      <p>Register form goes here</p>
    </ModalWithForm>
  );
}

export default RegisterModal;
