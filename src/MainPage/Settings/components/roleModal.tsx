import _ from "lodash";
import { useRef, useState } from "react";
import { Dialog, Menu } from "../../../base-components/Headless";
// import Button from "../../../base-components/Button";
import Lucide from "../../../base-components/Lucide";
import { FormInput, FormLabel, FormSelect } from "../../../base-components/Form";
import { addRole } from "../../../services/apis/role";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";

type Props = {
    ModalPreview: boolean;
    setModalPreview: Function;
    title: String;
    onLoad: Function;
    loading: boolean;
    // sendButtonRef: Function;
};
function RoleModal({
    ModalPreview,
    setModalPreview,
    title,
    loading,
    onLoad,
}:Props) {    

  const sendButtonRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [role, setRole] = useState({
    name:'',
    description: '',
  })
  
  const onFinish = async () => {
    console.log(role)
    addRole(role, navigate, dispatch);
    onLoad()
    // authUser({email, password}, navigate, dispatch)
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-5">
        
        {/* BEGIN: Modal Content */}
        <Dialog
            open={ModalPreview}
            onClose={() => {
            setModalPreview(false);
            }}
            initialFocus={sendButtonRef}
        >
            <Dialog.Panel>
            <Dialog.Title>
                <h2 className="mr-auto text-base font-medium">
                    {title}
                </h2>
            </Dialog.Title>
            <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                <div className="col-span-12 sm:col-span-12">
                    <FormLabel htmlFor="modal-form-1">Role Name</FormLabel>
                    <FormInput
                        id="modal-form-1"
                        required
                        type="text"
                        onChange={({target:{value}})=>setRole({...role, name: value})}
                        placeholder="Role Name"
                    />
                </div>
                <div className="col-span-12 sm:col-span-12">
                    <FormLabel htmlFor="modal-form-2">Role Description</FormLabel>
                    <FormInput
                        id="modal-form-2"
                        type="text"
                        onChange={({target:{value}})=>setRole({...role, description: value})}
                        placeholder="Enter description"
                    />
                </div>
            </Dialog.Description>
            <Dialog.Footer>
                {/* <Button
                    type="button"
                    variant="outline-secondary"
                    onClick={() => {
                        setModalPreview(false);
                    }}
                    className="w-20 mr-1"
                >
                    Cancel
                </Button>

                <Button
                    variant={loading? "dark":"primary"}
                    type="button"
                    className="w-20"
                    onClick={()=>onFinish()}
                    ref={sendButtonRef}
                >
                    Send
                </Button> */}
                <Button size="large" onClick={()=>onFinish()} ref={sendButtonRef} loading={loading}>
                    send
                </Button>
            </Dialog.Footer>
            </Dialog.Panel>
        </Dialog>
        {/* END: Modal Content */}
      </div>
    </>
  );
}

export default RoleModal;

export function EditModal({ edit, setEdit, setEditModal, editview, onFinish, loading}:{
    edit: any,
    setEdit: Function,
    setEditModal: Function,
    editview: boolean,
    onFinish: Function
    loading: boolean
}){
    return (
        <div>
          <Modal      
            title={`Edit ${name}`}
            open={editview} 
            // onCancel={setEditModal(false)} 
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
                      rows={4}
                      placeholder="Enter Role Description" 
                      value={edit.description} 
                      onChange={({target:{value}})=>setEdit({...edit, description: value})} 
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
        </div>
      )
}