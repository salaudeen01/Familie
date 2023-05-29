import _ from "lodash";
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useRef, useState } from "react";
import { Dialog, Menu } from "../../../../base-components/Headless";
// import Button from "../../../base-components/Button";
import Lucide from "../../../../base-components/Lucide";
import { FormInput, FormLabel, FormSelect } from "../../../../base-components/Form";
import { addPermission } from "../../../../services/apis/permission";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";

type Props = {
    ModalPreview: boolean;
    setModalPreview: Function;
    title: String;
    onLoad: Function;
    loading: boolean;
    role: any;
    // sendButtonRef: Function;
};
function PermissionModal({
    ModalPreview,
    setModalPreview,
    title,
    loading,
    onLoad,
    role,
}:Props) {    

  const sendButtonRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [permission, setPermission] = useState({
    name:'',
    description: '',
    path: '',
    method: '',
    roleId: ''
  })
  
  const onFinish = async () => {
    console.log(permission)
    onLoad()
    addPermission(permission, navigate, dispatch);    
    setTimeout(() => {
        setModalPreview(false)
      }, 1000)
    // authUser({email, password}, navigate, dispatch)
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-5">        
        {/* BEGIN: Modal Content */}
          <Modal      
            title={title}
            open={ModalPreview} 
            onCancel={() => {setModalPreview(false);}}
            footer={false}
          >
            <div>
              <Form layout="vertical" className="w-100" onFinish={()=>onFinish()}>
                <div className="row">
                  <div style={{margin: '0'}}>
                    <Form.Item label='Enter Permission Name' rules={[{ required: true }]}>
                      <Input 
                        required 
                        placeholder="Enter Permission Name" 
                        value={permission.name} onChange={({target:{value}})=>setPermission({...permission, name: value})} 
                      />
                    </Form.Item>
                  </div>
                  <div style={{margin: '0'}}>
                  <Form.Item label='Enter Permission Description'>
                    <TextArea
                      rows={2}
                      placeholder="Enter Permission Description" 
                      value={permission.description} 
                      onChange={({target:{value}})=>setPermission({...permission, description: value})} 
                    />
                  </Form.Item>
                  </div>
                  <div style={{margin: '0'}}>
                    <Form.Item label='Enter Permission Path' rules={[{ required: true }]}>
                      <Input 
                        required 
                        placeholder="Enter Permission Path" 
                        value={permission.path} onChange={({target:{value}})=>setPermission({...permission, path: value})} 
                      />
                    </Form.Item>
                  </div>
                  <div style={{margin: '0'}}>
                    <Form.Item label='Select Permission Role' rules={[{ required: true }]}>
                      <Select 
                        placeholder="Select Role" 
                        value={permission.roleId} 
                        onChange={(value)=>{setPermission({...permission, roleId: value})}}
                      >
                      {role.map((d: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; })=>(
                        <Select.Option value={d.id} key={d.id}>
                          {d.name}
                        </Select.Option>
                      ))}
                      </Select>
                    </Form.Item>
                  </div>
                  <div style={{margin: '0'}}>
                    <Form.Item label='Enter Permission Name' rules={[{ required: true }]}>
                      <Select
                        placeholder="Select Role" 
                        value={permission.method} 
                        onChange={(value)=>{setPermission({...permission, method: value})}}
                      >
                        <Select.Option value="POST" key="1">CREATE</Select.Option>
                        <Select.Option value="UPDATE" key="2">UPDATE</Select.Option>
                        <Select.Option value="GET" key="3">READ</Select.Option>
                        <Select.Option value="DELETE" key="4">DELETE</Select.Option>
                      </Select>
                    </Form.Item>
                  </div>
                  <div style={{margin: '0'}}>              
                    <Form.Item>
                      <Button
                        htmlType="submit"
                        loading={loading}
                        size="large"
                      >
                        Update
                      </Button>
                    </Form.Item>
                  </div>
                </div>
              </Form>
            </div>
          </Modal>
        {/* END: Modal Content */}
      </div>
    </>
  );
}

export default PermissionModal;

export function EditModal({ edit, setEdit, setEditModal, editview, onFinish, loading, role}:{
    edit: any,
    setEdit: Function,
    setEditModal: Function,
    editview: boolean,
    onFinish: Function,
    loading: boolean,
    role: any
}){
  console.log(loading)
    return (
        <div>
          <Modal      
            title={`Edit ${name}`}
            open={editview} 
            onCancel={() => {setEditModal(false);}}
            footer={false}
          >
            <div>
              <Form layout="vertical" className="w-100" onFinish={()=>onFinish(edit)}>
                <div className="row">
                  <div style={{margin: '0'}}>
                    <Form.Item label='Edit Role Name'>
                      <Input 
                        required 
                        placeholder="Enter Role Name" 
                        value={edit.name} onChange={({target:{value}})=>setEdit({...edit, name: value})} 
                      />
                    </Form.Item>
                  </div>
                  <div style={{margin: '0'}}>
                  <Form.Item label='Edit Role Description'>
                    <TextArea
                      required 
                      rows={3}
                      placeholder="Enter Role Description" 
                      value={edit.description} 
                      onChange={({target:{value}})=>setEdit({...edit, description: value})} 
                    />
                  </Form.Item>
                  </div>
                  <div style={{margin: '0'}}>
                    <Form.Item label='Enter Permission Path' rules={[{ required: true }]}>
                      <Input 
                        required 
                        placeholder="Enter Permission Path" 
                        value={edit.path} onChange={({target:{value}})=>setEdit({...edit, path: value})} 
                      />
                    </Form.Item>
                  </div>
                  <div style={{margin: '0'}}>
                    <Form.Item label='Select Permission Role' rules={[{ required: true }]}>
                      <Select 
                        placeholder="Select Role" 
                        value={edit.roleId} 
                        onChange={(value)=>{setEdit({...edit, roleId: value})}}
                      >
                      {role.map((d: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; })=>(
                        <Select.Option value={d.id} key={d.id}>
                          {d.name}
                        </Select.Option>
                      ))}
                      </Select>
                    </Form.Item>
                  </div>
                  <div style={{margin: '0'}}>
                    <Form.Item label='Enter Permission Name' rules={[{ required: true }]}>
                      <Select
                        placeholder="Select Role" 
                        value={edit.method} 
                        onChange={(value)=>{setEdit({...edit, method: value})}}
                      >
                        <Select.Option value="POST" key="1">CREATE</Select.Option>
                        <Select.Option value="UPDATE" key="2">UPDATE</Select.Option>
                        <Select.Option value="GET" key="3">READ</Select.Option>
                        <Select.Option value="DELETE" key="4">DELETE</Select.Option>
                      </Select>
                    </Form.Item>
                  </div>
                  <div style={{margin: '0'}}>              
                    <Form.Item>
                      <Button
                        htmlType="submit"
                        loading={loading}
                        size="large"
                      >
                        Update
                      </Button>
                    </Form.Item>
                  </div>
                </div>
              </Form>
            </div>
          </Modal>
        </div>
      )
}