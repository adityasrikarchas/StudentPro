import './styles.css';

const ModalWrapper = ({ children, style }) => {
  return (
    <div id="modal-wrapper" className="center" style={style}>
      {children}
    </div>
  );
};

export default ModalWrapper;
