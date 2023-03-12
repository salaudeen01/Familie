import _ from "lodash";
import { useRef, useState } from "react";
import { Dialog, Menu } from "../../../base-components/Headless";
import Button from "../../../base-components/Button";
import Lucide from "../../../base-components/Lucide";
import { FormInput, FormLabel, FormSelect } from "../../../base-components/Form";

type Props = {
    ModalPreview: boolean;
    setModalPreview: Function;
    title: String;
    // sendButtonRef: Function;
};
function SimpleModal({
    ModalPreview,
    setModalPreview,
    title,
}:Props) {    

  const sendButtonRef = useRef(null);
  const deleteButtonRef = useRef(null);

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
                <div className="col-span-12 sm:col-span-6">
                    <FormLabel htmlFor="modal-form-1">Username</FormLabel>
                    <FormInput
                        id="modal-form-1"
                        type="text"
                        placeholder="Username"
                    />
                </div>
                <div className="col-span-12 sm:col-span-6">
                    <FormLabel htmlFor="modal-form-2">Email</FormLabel>
                    <FormInput
                        id="modal-form-2"
                        type="text"
                        placeholder="example@gmail.com"
                    />
                </div>
                <div className="col-span-12 sm:col-span-6">
                    <FormLabel htmlFor="modal-form-3">
                        Phone
                    </FormLabel>
                    <FormInput
                        id="modal-form-3"
                        type="number"
                        placeholder="8154826"
                    />
                </div>
                <div className="col-span-12 sm:col-span-6">
                    <FormLabel htmlFor="modal-form-4">
                        Has the Words
                    </FormLabel>
                    <FormInput
                        id="modal-form-4"
                        type="text"
                        placeholder="Job, Work, Documentation"
                    />
                </div>
                <div className="col-span-12 sm:col-span-6">
                    <FormLabel htmlFor="modal-form-5">
                        Doesn't Have
                    </FormLabel>
                    <FormInput
                        id="modal-form-5"
                        type="text"
                        placeholder="Job, Work, Documentation"
                    />
                </div>
                <div className="col-span-12 sm:col-span-6">
                    <FormLabel htmlFor="modal-form-6">Size</FormLabel>
                    <FormSelect id="modal-form-6">
                        <option>10</option>
                        <option>25</option>
                        <option>35</option>
                        <option>50</option>
                    </FormSelect>
                </div>
            </Dialog.Description>
            <Dialog.Footer>
                <Button
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
                variant="primary"
                type="button"
                className="w-20"
                ref={sendButtonRef}
                >
                Send
                </Button>
            </Dialog.Footer>
            </Dialog.Panel>
        </Dialog>
        {/* END: Modal Content */}
      </div>
    </>
  );
}

export default SimpleModal;
