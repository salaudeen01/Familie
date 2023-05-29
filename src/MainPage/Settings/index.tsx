import _ from "lodash";
// import Button from "../../base-components/Button";
// import {useState } from "react";
import { Spin, Tabs, TabsProps } from "antd";
import Roles from "./components/role";
import React, { useState } from "react";
import Permissions from "./components/permission/permission";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import useDashboard from "./components/useDashboard";
import Admins from "./components/admin/admin";

function Users2() {    

  // const [headerFooterModalPreview, setHeaderFooterModalPreview] = useState(false);
  const data = useSelector((state: RootState) => state)
  const { role, loading, permission, admin } = data
  
  const { onLoad, onLoadPermission } = useDashboard();

  React.useEffect(() => {
    onLoadPermission();
    onLoad();
  }, [onLoadPermission, onLoad]);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `ROLES`,
      children: <Roles 
        role={role}
        loading={loading.loading}
        onLoad={onLoad}
      />,
    },
    {
      key: '2',
      label: `PERMISSION`,
      children: <Permissions
        permission={permission} 
        role={role}
        loading={loading.loading}
        onLoad={onLoadPermission}
      />,
    },
    {
      key: '3',
      label: `Admin`,
      children: <Admins
      admin={admin} 
      role={role}
      loading={loading.loading}
      onLoad={onLoadPermission}
    />,
    },
  ];
  return (
    <Spin spinning={loading.loading}>
        <Tabs items={items} tabPosition="left" type="card" size="large" />
    </Spin>
  );
}

export default Users2;