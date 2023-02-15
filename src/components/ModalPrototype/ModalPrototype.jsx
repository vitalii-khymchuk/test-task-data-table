import ReactDOM from "react-dom";
import { Modal } from "antd";
import Button from "../Button";

const ModalContainer = ({ isOpen = false, handleCancel, children }) => {
  console.log(children);
  return (
    <Modal
      //   title="Basic Modal"
      open={isOpen}
      onCancel={handleCancel}
      footer={[]}
    >
      {children}
    </Modal>
  );
};

const ModalPrototype = ({ children }) => {
  return ReactDOM.createPortal(
    <ModalContainer children={children} />,
    document.querySelector("#popup-root")
  );
};

export default ModalPrototype;

//    <p>Some contents...</p>
//       <p>Some contents...</p>
//       <p>Some contents...</p>
