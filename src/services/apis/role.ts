import { useDispatch } from "react-redux"
import { NavigateFunction } from "react-router-dom"

import axiosInstance from "../axios";
import { Dispatch, AnyAction } from "@reduxjs/toolkit";
import { notification } from "antd";
import { setRole, setRoles } from "../../stores/slice/role";
import { disableLoading, setLoading } from "../../stores/slice/loading";

//  const dispatch = useDispatch();
//  const navigate = useNavigate();

export const addRole =async (data: any, navigate: NavigateFunction, dispatch: Dispatch<AnyAction>) => {
    console.log(data)
    try {
        const response = await axiosInstance(navigate).post('/role', data);
        dispatch(setLoading());
        if (response.data) {
            dispatch(disableLoading());
            notification.success({message: 'Successfully', description: response.data.message})
            navigate('/settings');           
        }       
        // setTimeout(() => {
        //     window.location.reload()
        // }, 500)
    } catch (error) {
        // const {data} = error?.response
        console.log(error)
        notification.error({message: 'Incorrect Credentials'})
        // openNotification({type: 'error', title: 'Incorrect Credentials', description: data.message})
        dispatch(disableLoading());
    }
}

export const deleteRole =async (data: any, navigate: NavigateFunction, dispatch: Dispatch<AnyAction>) => {
    try {
        const response = await axiosInstance(navigate).delete(`/role/${data}`);
        dispatch(setLoading());
        if (response.data) {
            dispatch(disableLoading());
            notification.success({message: 'Successfully', description: response.data.message})
            navigate('/settings');            
        }
    } catch (error) {
        // const {data} = error?.response
        console.log(error)
        notification.error({message: 'Incorrect Credentials'})
        // openNotification({type: 'error', title: 'Incorrect Credentials', description: data.message})
        dispatch(disableLoading());
    }
}

export const editRole =async (data: any, navigate: NavigateFunction, dispatch: Dispatch<AnyAction>) => {
    try {
        const response = await axiosInstance(navigate).put(`/role/${data.id}`, data);
        dispatch(setLoading());
        if (response.data) {
            dispatch(disableLoading());
            notification.success({message: 'Successfully', description: response.data.message})
            navigate('/settings');            
        }
    } catch (error) {
        // const {data} = error?.response
        console.log(error)
        notification.error({message: 'Incorrect Credentials'})
        // openNotification({type: 'error', title: 'Incorrect Credentials', description: data.message})
        dispatch(disableLoading());
    }
}

export const getRole = async (setRState:any, navigate: NavigateFunction, dispatch: Dispatch<AnyAction>) => {
    try {
        dispatch(setLoading());
        const response = await axiosInstance(navigate).get('/roles');
        if (response.data) {
            dispatch(disableLoading());
            const { data } = response.data
            dispatch(setRoles(data))
        }
    } catch (error) {
        // const {data} = error?.response
        // console.log(error)
        notification.error({message: 'Incorrect Credentials'})
        // openNotification({type: 'error', title: 'Incorrect Credentials', description: data.message})
        dispatch(disableLoading());
    }
}