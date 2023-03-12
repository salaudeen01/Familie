import _ from "lodash";
import { useRef, useState } from "react";
import { Dialog, Menu } from "../../../../base-components/Headless";
import Button from "../../../../base-components/Button";
import Lucide from "../../../../base-components/Lucide";
import { FormInput, FormLabel, FormSelect } from "../../../../base-components/Form";

type Props = {
    // ModalPreview: boolean;
    description: String;
    title: String;
    // sendButtonRef: Function;
};
function SimpleCard({
    description,
    title,
}:Props) {    

  const sendButtonRef = useRef(null);
  const deleteButtonRef = useRef(null);

  return (
    <>
        <div className="col-span-12 p-5 cursor-pointer sm:col-span-4 2xl:col-span-3 box zoom-in">
            <div className="text-3xl font-bold font-medium">{title}</div>
            <div className="text-slate-500 text-lg font-medium">{description}</div>
        </div>
    </>
  );
}

export default SimpleCard;
