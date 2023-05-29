import _ from "lodash";
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { addAdmin } from "../../../../services/apis/admin";

type Props = {
    ModalPreview: boolean;
    setModalPreview: Function;
    title: String;
    onLoad: Function;
    loading: boolean;
    role: any;
    // sendButtonRef: Function;
};
function AdminModal({
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
  const [admin, setAdmin] = useState({
    firstName:'',
    lastName:'',
    email:'',
    description: '',
    phone: '',
    gender: '',
    password: 'password@1234',
    role: ''
  })
  
  const onFinish = async () => {
    console.log(admin)
    onLoad()
    addAdmin(admin, navigate, dispatch);    
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
                <div className="">
                  <div className="col-md-6" style={{margin: '0'}}>
                    <Form.Item label='Enter First Name' rules={[{ required: true }]}>
                      <Input 
                        required 
                        placeholder="Enter First Name" 
                        value={admin.firstName} onChange={({target:{value}})=>setAdmin({...admin, firstName: value})} 
                      />
                    </Form.Item>
                  </div>
                  <div className="col-md-6" style={{margin: '0'}}>
                    <Form.Item label='Enter Last Name' rules={[{ required: true }]}>
                      <Input 
                        required 
                        placeholder="Enter Last Name" 
                        value={admin.lastName} onChange={({target:{value}})=>setAdmin({...admin, lastName: value})} 
                      />
                    </Form.Item>
                  </div>
                  <div className="col-md-6" style={{margin: '0'}}>
                    <Form.Item label='Enter Email' rules={[{ required: true }]}>
                      <Input 
                        required 
                        placeholder="Enter Email" 
                        value={admin.email} onChange={({target:{value}})=>setAdmin({...admin, email: value})} 
                        type='email'
                      />
                    </Form.Item>
                  </div>
                  <div className="col-md-6" style={{margin: '0'}}>
                    <Form.Item label='Select Role' rules={[{ required: true }]}>
                      <Select 
                        size="large"
                        placeholder="Select Role" 
                        value={admin.role} 
                        onChange={(value)=>{setAdmin({...admin, role: value})}}
                      >
                      {role.map((d: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; })=>(
                        <Select.Option value={d.id} key={d.id}>
                          {d.name}
                        </Select.Option>
                      ))}
                      </Select>
                    </Form.Item>
                  </div>
                  <div className="col-md-6" style={{margin: '0'}}>
                    <Form.Item label='Enter Contact' rules={[{ required: true }]}>
                      <Input 
                        required 
                        placeholder="Enter Contact" 
                        value={admin.phone} onChange={({target:{value}})=>setAdmin({...admin, phone: value})} 
                        type='number'
                      />
                    </Form.Item>
                  </div>
                  <div className="col-md-6" style={{margin: '0'}}>
                    <Form.Item label='Enter Gender' rules={[{ required: true }]}>
                      {/* <Input 
                        required 
                        placeholder="Enter Gender" 
                        value={admin.gender} onChange={({target:{value}})=>setAdmin({...admin, gender: value})} 
                      /> */}
                      <Select
                        placeholder="Select Role" 
                        size="large"
                        value={admin.gender} 
                        onChange={(value)=>{setAdmin({...admin, gender: value})}}
                      >
                        <Select.Option value="Male" key="1">Male</Select.Option>
                        <Select.Option value="Female" key="2">Female</Select.Option>
                      </Select>
                    </Form.Item>
                  </div>
                  <div className="col-md-6" style={{margin: '0'}}>
                  <Form.Item label='Enter Permission Description'>
                    <TextArea
                      rows={2}
                      placeholder="Enter Permission Description" 
                      value={admin.description} 
                      onChange={({target:{value}})=>setAdmin({...admin, description: value})} 
                    />
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

export default AdminModal;

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