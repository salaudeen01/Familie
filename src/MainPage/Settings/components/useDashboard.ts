import React, { useState } from 'react'

// router
import { useNavigate } from 'react-router-dom';

// state
import { useDispatch } from 'react-redux';
import { getRole } from '../../../services/apis/role';
import { getPermission } from '../../../services/apis/permission';
import { getAdmin } from '../../../services/apis/admin';

const useDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const [roleState, setRState] = useState([])

  const onLoad = React.useCallback(() => {
    getRole(setRState, navigate, dispatch);
  }, [setRState, navigate, dispatch]);

  const onLoadPermission = React.useCallback(() => {
    getPermission(setRState, navigate, dispatch);
  }, [setRState, navigate, dispatch]);

  const onLoadAdmin = React.useCallback(() => {
    getAdmin(setRState, navigate, dispatch);
  }, [setRState, navigate, dispatch]);

  return {onLoad, onLoadPermission, onLoadAdmin}
}

export default useDashboard
