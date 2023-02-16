import ReactDOM from "react-dom";
import { Modal } from "antd";
import PropTypes from "prop-types";

const ModalContainer = ({ isOpen, handleCancel, children }) => {
  return (
    <Modal
      open={isOpen}
      onCancel={handleCancel}
      footer={[]}
      width={840}
      bodyStyle={{ overflowX: "auto", overflowY: "hidden", height: "600px" }}
    >
      {children}
    </Modal>
  );
};

const ModalPrototype = (props) => {
  return ReactDOM.createPortal(
    <ModalContainer {...props} />,
    document.querySelector("#popup-root")
  );
};

ModalContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func,
  children: PropTypes.node,
};

export default ModalPrototype;
