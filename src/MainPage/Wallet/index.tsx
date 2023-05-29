import { Tabs, TabsProps } from "antd";
import Button from "../../base-components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

function Wallet() {
  const showModal = () => {
      console.log('hello');
    };
  //   const [tabKey, setTabKey] = useState('1')
  //   const items: TabsProps['items'] = [
  //     {
  //       key: '1',
  //       label: `Wallet`,
  //       children: `Content of Tab Pane 1`,
  //     },
  //     {
  //       key: '2',
  //       label: `Families`,
  //       children: `Content of Tab Pane 2`,
  //     },
  //     {
  //       key: '3',
  //       label: `Update`,
  //       children: `Content of Tab Pane 3`,
  //     },
  //   ];
    return(
        <>
          <div className="flex flex-wrap justify-between items-center col-span-12 mt-2 intro-y sm:flex-nowrap">
            <div>
                <h2 className="mt-5 text-lg font-medium intro-y">Wallet</h2> 
            </div>
            <div className="mt-4 intro-y">
              <Link to='/usersx'>
                <Button onClick={showModal} >
                    Back
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <Tabs
                defaultActiveKey='1'
                // key={tabKey}
                activeKey='1'
                // items={items}
                // onChange={key => setTabKey(key)}
                tabPosition="left"
            />
          </div>
        </>
    );  
}

export default Wallet;