import "./ModalWithForm.css";

function ModalWithForm({
  children,
  renderSubmit = true,
  handleCloseModal,
  handleAlternate,
  title,
  buttonText,
  altText,
  handleSubmit,
}) {
  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__close" onClick={handleCloseModal}>
          &times;
        </button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={handleSubmit}>
          {children}

          {renderSubmit ? (
            <>
              <button
                className="modal__submit modal__submit_active_true"
                type="submit"
              >
                {buttonText}
              </button>

              <button className="modal__alternate" onClick={handleAlternate}>
                or {altText}
              </button>
            </>
          ) : (
            <button
              className="modal__alternate modal__alternate_type_success"
              onClick={handleAlternate}
            >
              {altText}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
