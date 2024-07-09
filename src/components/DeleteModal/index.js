import React from "react";
import classes from "./DeleteModal.module.css";
import ModalComponent from "../ModalComponent";

function DeleteModal({
  opendeleteModal,
  setOpenDeleteModal,
  deletefunction,
  functionParam,
  text = null,
  title = "Are You Sure ?",
}) {
  return (
    <ModalComponent isOpen={opendeleteModal} setOpen={setOpenDeleteModal}>
      <div className={classes.DeleteModal}>
        <div className={classes.Heading}>
          {title} <br />
        </div>
        {text && (
          <div className={classes.note}>
            <div>Warning!</div>
            <div>{text}</div>
          </div>
        )}
        <div
          className={classes.ButtonContainer}
          onClick={() => {
            setOpenDeleteModal(false);
          }}
        >
          <div className={`${classes.yes} btn-secondary`}>No</div>
          <div
            className={`${classes.yes} btn-primary`}
            onClick={() => {
              deletefunction(functionParam);
            }}
          >
            Yes
          </div>
        </div>
      </div>
    </ModalComponent>
  );
}

export default DeleteModal;
