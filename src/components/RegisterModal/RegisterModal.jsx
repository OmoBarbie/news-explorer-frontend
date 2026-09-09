import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function RegisterModal({
  isOpen,
  handleCloseModal,
  title,
  buttonText,
  altText,
  handleOpenLogin,
  handleRegistrationSuccess,
}) {
  const { values, errors, isValid, handleChange } = useFormWithValidation({
    email: "",
    password: "",
    username: "",
  });

  function onSubmit(e) {
    e.preventDefault();
    handleRegistrationSuccess(values);
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      title={title}
      buttonText={buttonText}
      altText={altText}
      handleAlternate={handleOpenLogin}
      handleSubmit={onSubmit}
      isSubmitDisabled={!isValid}
    >
      <label className="modal__label">
        Email
        <input
          name="email"
          className="modal__input"
          type="email"
          placeholder="Enter email"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>
      <span className="modal__warning">{errors.email}</span>
      <label className="modal__label">
        Password
        <input
          name="password"
          className="modal__input"
          type="password"
          placeholder="Enter password"
          value={values.password}
          onChange={handleChange}
          required
          minLength="6"
        />
      </label>
      <span className="modal__warning">{errors.password}</span>

      <label className="modal__label">
        Username
        <input
          name="username"
          className="modal__input"
          type="text"
          placeholder="Enter your username"
          value={values.username}
          onChange={handleChange}
          required
          minLength="4"
        />
      </label>
      <span className="modal__warning">{errors.username}</span>
    </ModalWithForm>
  );
}

export default RegisterModal;
