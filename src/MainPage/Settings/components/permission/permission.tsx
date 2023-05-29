import _ from "lodash";
import Button from "../../../../base-components/Button";
import { FormInput } from "../../../../base-components/Form";
import Lucide from "../../../../base-components/Lucide";
import React, { useState } from "react";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal, Table } from "antd";
import PermissionModal, { EditModal } from "./permissionModal";
import useDashboard from "../useDashboard";
import { useDispatch } from "react-redux";
// import { RootState } from "../../../../stores/store";
import { deletePermission, editPermission } from "../../../../services/apis/permission";
import { useNavigate } from "react-router-dom";
// import SimpleCard from "../../Component/Cards/simpleCard";

type Props = {
    permission: any;
    onLoad: Function;
    loading: boolean;
    role: any;
    // sendButtonRef: Function;
};

function Permissions({
    permission,
    loading,
    // onLoad,
    role
}:Props) {    
  const { confirm } = Modal;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [headerFooterModalPreview, setHeaderFooterModalPreview] = useState(false);
  const [editview, setEditModal] = useState(false);
  const [edit, setEdit] = useState([])
  const { permissions } = permission
  const { roles } = role
  // const sendButtonRef = useRef(null);
  const { onLoadPermission } = useDashboard();
  // const deleteButtonRef = useRef(null);
  const onOpen=(e: any)=>{
    // console.log(e)
    setEdit(e)
    setEditModal(true)
  }
  const handleDelete = (e: any) => {
    console.log(e)
    confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleFilled />,
      // content: 'Some descriptions',
      okType: "danger",
      onOk() {
        deletePermission(e, navigate, dispatch)
        onLoadPermission()
      },
      onCancel() {
        console.log('Cancel');
      },
    })
  }
  const  onFinish =()=>{
    console.log(edit)    
    editPermission(edit, navigate, dispatch);
      setTimeout(() => {
        setEditModal(false)
      }, 1000)
  }
  const tableColumns = [
    {
      title: 'Permission Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Method',
      dataIndex: 'method',
      key: 'method',
    },
    {
      title: 'Path',
      dataIndex: 'path',
      key: 'path',
    },
    {
      title: 'Role',
      dataIndex: 'roleId',
      key: 'roleId',
      render:(_e: any)=>(
        <p>
          {
            roles.map((_a: any)=>(
              _a.id === _e && _a.name
            ))
          }
        </p>
      )
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'id',
      render:(_e: any)=>(        
        <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap">
          <Button variant="primary" className="w-18 mb-2 mr-1" onClick={()=>onOpen(_e)}>
            Edit
          </Button>
          <Button variant="danger" className="w-184 mb-2 mr-1" onClick={()=>handleDelete(_e.id)}>
            Disable
          </Button>
        </div>
      )
    },
  ]
  React.useEffect(() => {
    onLoadPermission();
  }, [onLoadPermission]);

  // console.log(permissions)

  return (
    <>
      <h2 className="mt-10 text-lg font-medium intro-y">Permission</h2>     
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap">
          <Button 
            variant="primary" 
            className="mr-2 shadow-md"          
            onClick={(event: React.MouseEvent) => {
                event.preventDefault();
                setHeaderFooterModalPreview(true);
            }}
        >
            Add Permission
          </Button>
          <div className="hidden mx-auto md:block text-slate-500">
            {/* Showing 1 to 10 of 150 entries */}
          </div>
          <div className="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
            <div className="relative w-56 text-slate-500">
              <FormInput
                type="text"
                className="w-56 pr-10 !box"
                placeholder="Search..."
              />
              <Lucide
                icon="Search"
                className="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto  my-5">
        <Table 
          columns={tableColumns}
          dataSource={permissions}
          key="id"
          rowKey="id"
          loading={loading}
          pagination={{ pageSize: 10 }}
        />
      </div>
        <PermissionModal
            ModalPreview={headerFooterModalPreview} 
            setModalPreview={setHeaderFooterModalPreview} 
            title='Add Permission'  
            loading={loading} 
            onLoad={onLoadPermission}     
            role={roles}
        />
        <EditModal 
          edit={edit}
          setEdit={setEdit}
          setEditModal={setEditModal}
          editview={editview}
          onFinish={onFinish}
          loading={loading}
          role={roles}
        />
    </>
  );
}

export default Permissions;