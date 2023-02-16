import ReactDOM from "react-dom";
import { Modal } from "antd";
import Button from "../Button";

const ModalContainer = ({ isOpen, handleCancel, children }) => {
  return (
    <Modal
      //   title="Basic Modal"
      open={isOpen}
      onCancel={handleCancel}
      footer={[]}
      width={860}
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

export default ModalPrototype;

//    <p>Some contents...</p>
//       <p>Some contents...</p>
//       <p>Some contents...</p>
