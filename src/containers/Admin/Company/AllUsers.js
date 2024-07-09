import React from "react";
import { useLoader } from "../../../hooks/use-loader.hook";
import { useState } from "react";
import { AdminCompanyService } from "../../../services/companyService";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { UilPen } from "@iconscout/react-unicons";
import { UilTrash } from "@iconscout/react-unicons";
import Typography from "../../../components/Typography/Typography";
import Table from "../../../components/Table/Table";
import { ToggleButtonWithState } from "../../../components/Inputs";
import CreateEditUser from "./ModalComponent/CreateUser";
import ModalComponent from "../../../components/ModalComponent";
import { AdminUserService } from "../../../services/userService";
import DeleteModal from "../../../components/DeleteModal";

const AllUsers = ({ company = {}, companies = [] }) => {
  const [startLoader, stopLoader] = useLoader();
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(null);
  const [editModal, setEditModal] = useState({
    status: false,
    editData: {},
  });
  const [deleteModal, setDeleteModal] = useState({
    status: false,
    id: null,
  });

  useEffect(() => {
    getData();
  }, [refresh]);

  const getData = () => {
    if (company.id) {
      AdminCompanyService.GetUsers(
        company.id,
        {},
        () => startLoader("getUsers"),
        handleSuccess,
        handleError,
        () => stopLoader("getUsers")
      );
    }
  };

  const handleSuccess = ({ data }) => {
    if (Array.isArray(data.data)) {
      const processed = data.data.map((item, index) => ({
        ...item,
        sno: index + 1,
        phone: `${item.contact?.countryCode} ${item.contact?.phone}`,
        access: (
          <div className="action-container">
            <ToggleButtonWithState
              value={item.hasAccess}
              onChange={(e) => handleChangeAccess(item.id, e.target.checked)}
            />
          </div>
        ),
        action: (
          <div className="action-container">
            <div>
              <UilPen
                size={"1.2vw"}
                style={{ color: "var(--color-primary)" }}
                onClick={() => setEditModal({ status: true, editData: item })}
              />
            </div>

            <div>
              <UilTrash
                size={"1.2vw"}
                style={{ color: "var(--color-primary)" }}
                onClick={() => setDeleteModal({ status: true, id: item.id })}
              />
            </div>
          </div>
        ),
      }));
      setUsers(processed);
    }
  };

  const handleChangeAccess = (id, value) => {
    if (id) {
      AdminUserService.UpdateAccess(
        id,
        { access: value },
        () => startLoader("access"),
        handleAccessSuccess,
        handleError,
        () => stopLoader("access")
      );
    }
  };

  const handleAccessSuccess = () => {
    setRefresh(Date.now());
    toast.success("Access updated!");
  };

  const handleDelete = () => {
    if (deleteModal.id) {
      AdminUserService.Delete(
        deleteModal.id,
        () => startLoader("delete"),
        handleDeleteSuccess,
        handleError,
        () => stopLoader("delete")
      );
    }
  };

  const handleDeleteSuccess = () => {
    setRefresh(Date.now());
    toast.success("Deleted successfully!");
  };

  const handleError = (err) => {
    if (err && err.response) toast.error(err.response.data.message);
  };

  return (
    <div className="rounded-content-area">
      <div className="content-header">
        <div>
          <Typography content={`All ${company.name} Users`} />
          <div className="table-count">
            Total Count :
            <span>
              <Typography size="14" content={users.length} />
            </span>
          </div>
        </div>
      </div>
      <Table
        data={users}
        head={[
          "S.No.",
          "Name",
          "Email",
          "Phone",
          "License ID",
          "Access",
          "Action",
        ]}
        keys={[
          "sno",
          "name",
          "email",
          "phone",
          "licenseId",
          "access",
          "action",
        ]}
      />
      <ModalComponent
        isOpen={editModal.status}
        setOpen={() => setEditModal({ status: false, editData: {} })}
      >
        <CreateEditUser
          setOpen={() => setEditModal({ status: false, editData: {} })}
          companies={companies}
          editData={editModal.editData}
          setRefresh={setRefresh}
        />
      </ModalComponent>
      <DeleteModal
        opendeleteModal={deleteModal.status}
        setOpenDeleteModal={(status) => setDeleteModal({ status, id: null })}
        deletefunction={handleDelete}
        functionParam={deleteModal.id}
      ></DeleteModal>
    </div>
  );
};

export default AllUsers;
