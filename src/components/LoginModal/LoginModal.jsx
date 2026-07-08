import "./LoginModal.css";

function LoginModal({ isOpen, onClose }) {
  return (
    <LoginModal isOpen={isOpen} onClose={onClose}>
      <h2>Sign In</h2>
      <p>Login form goes here</p>
    </LoginModal>
  );
}

export default LoginModal;
