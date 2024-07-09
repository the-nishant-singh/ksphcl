import classes from "./ModalComponent.module.css";
import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-43%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalComponent = ({ isOpen, setOpen, children, onClose, style }) => {
  customStyles.content = { ...customStyles.content, ...style };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        style={customStyles}
        onRequestClose={onClose ? () => onClose() : () => setOpen(false)}
        closeTimeoutMS={0}
      >
        <div className={classes.ModalContent}>{children}</div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
