import _ from "lodash";
// import fakerData from "../../../utils/faker";
import Button from "../../base-components/Button";
// import Pagination from "../../../base-components/Pagination";
// import { FormInput, FormLabel, FormSelect } from "../../../base-components/Form";
// import Lucide from "../../../base-components/Lucide";
// import { Dialog, Menu } from "../../../base-components/Headless";
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useRef, useState } from "react";
// import SimpleModal from "../Component/Modal";
// import { Table } from "antd";
// import { Highlight, Preview, Source } from "../../../base-components/PreviewComponent";
// import SimpleCard from "../Component/Cards/simpleCard";
import Home from "./components/home";

function Users2() {    

  // const [headerFooterModalPreview, setHeaderFooterModalPreview] = useState(false);
  const [section, setSection] = useState('home')
  // const sendButtonRef = useRef(null);
  // const deleteButtonRef = useRef(null);
  const tableColumns = [
    {
      title: '#',
      dataIndex: 'photos',
      key: 'photos',
      render: (data: (string | undefined)[])=><div className="w-16 h-16 image-fit">
        <img alt="USer Image" className="rounded-full" src={data[0]} />
        </div>
    },
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'users',
      render: (text: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }[]) => <a>{text[0].name}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'users',
      key: 'email',
      render: (text: { email: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; }[])=><a>{text[0].email}</a>,
    },
    {
      title: 'Occupation',
      dataIndex: 'jobs',
      key: 'jobs',
    },
    {
      title: 'Status',
      dataIndex: 'user_status',
      key: 'user_status',
    },
    {
      title: 'Action',
      dataIndex: 'user_status',
      key: 'user_status',
      render:()=>(        
        <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap">
          <Button variant="primary" className="w-18 mb-2 mr-1">
            Details
          </Button>
          <Button variant="danger" className="w-184 mb-2 mr-1">
            Disable
          </Button>
        </div>
      )
    },
  ]
  return (
    <>
      {section === 'home' &&(
        <Home />
      )}
    </>
  );
}

export default Users2;
