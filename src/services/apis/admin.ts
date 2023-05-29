import { useDispatch } from "react-redux"
import { NavigateFunction } from "react-router-dom"

import axiosInstance from "../axios";
import { Dispatch, AnyAction } from "@reduxjs/toolkit";
import { notification } from "antd";
import { setAdmin } from "../../stores/slice/admin";
import { disableLoading, setLoading } from "../../stores/slice/loading";

//  const dispatch = useDispatch();
//  const navigate = useNavigate();

export const addAdmin =async (data: any, navigate: NavigateFunction, dispatch: Dispatch<AnyAction>) => {
    try {
        const response = await axiosInstance(navigate).post('/create-admin', data);
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

export const deleteAdmin =async (data: any, navigate: NavigateFunction, dispatch: Dispatch<AnyAction>) => {
    try {
        const response = await axiosInstance(navigate).delete(`/create-admin/${data}`);
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

export const editAdmin =async (data: any, navigate: NavigateFunction, dispatch: Dispatch<AnyAction>) => {
    try {
        const response = await axiosInstance(navigate).put(`/create-admin/${data.id}`, data);
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

export const getAdmin = async (setRState:any, navigate: NavigateFunction, dispatch: Dispatch<AnyAction>) => {
    try {
        dispatch(setLoading());
        const response = await axiosInstance(navigate).get('/all-admin');
        if (response.data) {
            dispatch(disableLoading());
            const { data } = response.data
            dispatch(setAdmin(data))
        }
    } catch (error) {
        // const {data} = error?.response
        // console.log(error)
        notification.error({message: 'Incorrect Credentials'})
        // openNotification({type: 'error', title: 'Incorrect Credentials', description: data.message})
        dispatch(disableLoading());
    }
}