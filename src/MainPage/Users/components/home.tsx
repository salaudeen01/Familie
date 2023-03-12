import _ from "lodash";
import fakerData from "../../../utils/faker";
import Button from "../../../base-components/Button";
// import Pagination from "../../base-components/Pagination";
import { FormInput, FormLabel, FormSelect } from "../../../base-components/Form";
import Lucide from "../../../base-components/Lucide";
import { Dialog, Menu } from "../../../base-components/Headless";
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useRef, useState } from "react";
import SimpleModal from "../../Component/Modal";
import { Table } from "antd";
// import { Highlight, Preview, Source } from "../../../base-components/PreviewComponent";
import SimpleCard from "../../Component/Cards/simpleCard";

function Home() {    

  const [headerFooterModalPreview, setHeaderFooterModalPreview] = useState(false);
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
console.log(_.take(fakerData, 9))
  return (
    <>
      <h2 className="mt-10 text-lg font-medium intro-y">Users Page</h2> 
      
      <div className="grid grid-cols-12 gap-5 mt-5">
        <SimpleCard 
            title= '40'
            description='TOTAL USERS'
        />
        <SimpleCard 
            title= '30'
            description='ACTIVE USERS'
        />
        <SimpleCard 
            title= '10'
            description='INACTIVE USERS'
        />
      </div>     
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
            Add New User
          </Button>
          <Menu>
            <Menu.Button as={Button} className="px-2 !box">
              <span className="flex items-center justify-center w-5 h-5">
                <Lucide icon="Plus" className="w-4 h-4" />
              </span>
            </Menu.Button>
            <Menu.Items className="w-40">
              <Menu.Item>
                <Lucide icon="Users" className="w-4 h-4 mr-2" /> Add Group
              </Menu.Item>
              <Menu.Item>
                <Lucide icon="MessageCircle" className="w-4 h-4 mr-2" /> Send
                Message
              </Menu.Item>
            </Menu.Items>
          </Menu>
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
          dataSource={_.take(fakerData, 9)}
          pagination={{ pageSize: 10 }}
        />
      </div>
        <SimpleModal 
            ModalPreview={headerFooterModalPreview} 
            setModalPreview={setHeaderFooterModalPreview} 
            title='Add User'        
        />
    </>
  );
}

export default Home;
