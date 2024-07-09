import React, { useEffect, useState } from "react";
import Typography from "../../../components/Typography/Typography";
import CreateButton from "../../../components/Buttons/CreateButton";
import Table from "../../../components/Table/Table";
import ModalComponent from "../../../components/ModalComponent";
import { toast } from "react-toastify";
import { AdminModuleService } from "../../../services/moduleService";
import { useLoader } from "../../../hooks";
import { ToggleButtonWithState } from "../../../components/Inputs";
import { UilPen } from "@iconscout/react-unicons";
import { UilTrash } from "@iconscout/react-unicons";
import classes from "./index.module.css";
import CreateEditModule from "./ModalComponent/CreateEditModule";

const AllModules = () => {
  const [startLoader, stopLoader] = useLoader();
  const [refresh, setRefresh] = useState(null);
  const [modules, setModules] = useState([]);
  const [createEditModal, setCreateEditModal] = useState({
    status: false,
    editData: {},
  });

  useEffect(() => {
    getData();
  }, [refresh]);

  const getData = () => {
    AdminModuleService.GetAll(
      {},
      () => startLoader("getAll"),
      handleSuccess,
      handleError,
      () => stopLoader("getAll")
    );
  };

  const handleSuccess = ({ data }) => {
    if (Array.isArray(data.data)) {
      const processed = data.data.map((item, index) => ({
        ...item,
        sno: index + 1,
        rThumnail: (
          <img
            src={item.thumbnail}
            alt="thumbnail"
            className={classes.Thumbnail}
          />
        ),
        published: (
          <div className="action-container">
            <ToggleButtonWithState
              value={item.isPublished}
              onChange={(e) => handleChangePublish(item.id, e.target.checked)}
            />
          </div>
        ),
        action: (
          <div className="action-container">
            <div>
              <UilPen
                size={"1.2vw"}
                style={{ color: "var(--color-primary)" }}
                // onClick={() => handleCreateEditCompany(true, item)}
              />
            </div>
            <div>
              <UilTrash
                size={"1.2vw"}
                style={{ color: "var(--color-primary)" }}
                // onClick={() => setDeleteModal({ status: true, id: item.id })}
              />
            </div>
          </div>
        ),
      }));
      setModules(processed);
    }
  };

  const handleChangePublish = (id, value) => {};

  const handleError = (err) => {
    if (err && err.response) toast.error(err.response.data.message);
  };

  const handleCreateEditModule = (status = true, editData = {}) =>
    setCreateEditModal({ status, editData });

  return (
    <div className="rounded-content-area">
      <div className="content-header">
        <div>
          <Typography content={"All Modules"} />
          <div className="table-count">
            Total Count :
            <span>
              <Typography size="14" content={modules.length} />
            </span>
          </div>
        </div>
        <div className="action-container">
          <CreateButton
            size="medium"
            text="Create Module"
            onClick={handleCreateEditModule}
          />
        </div>
      </div>
      <Table
        data={modules}
        head={["S.No.", "Thumbnail", "Title", "Published", "Action"]}
        keys={["sno", "rThumnail", "title", "published", "action"]}
      />
      <ModalComponent
        isOpen={createEditModal.status}
        setOpen={() => handleCreateEditModule(false)}
      >
        <CreateEditModule
          setOpen={handleCreateEditModule}
          setRefresh={setRefresh}
          editData={createEditModal.editData}
        />
      </ModalComponent>
    </div>
  );
};

export default AllModules;
