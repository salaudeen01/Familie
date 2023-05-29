import { useDispatch } from "react-redux"
import { NavigateFunction, useNavigate } from "react-router-dom"
import { disableLoading, setAuth, setLoading } from "../../stores/slice/auth";

import axiosInstance from "../axios";
import { Dispatch, AnyAction } from "@reduxjs/toolkit";
import { notification } from "antd";

//  const dispatch = useDispatch();
//  const navigate = useNavigate();

export const authUser =async (data: { email: string; password: string; }, navigate: NavigateFunction, dispatch: Dispatch<AnyAction>) => {
    try {
        const response = await axiosInstance(navigate).post('auth/login', data);
        dispatch(setLoading());
        if (response.data) {
            localStorage.setItem('accessToken', response?.data?.token)
            dispatch(setAuth(response.data))
            notification.success({message: 'Login Successfully'})
            navigate('/');            
        }
    } catch (error) {
        // const {data} = error?.response
        console.log(error)
        notification.error({message: 'Incorrect Credentials'})
        // openNotification({type: 'error', title: 'Incorrect Credentials', description: data.message})
        dispatch(disableLoading());
    }
}
export const logout =async (navigate: NavigateFunction, dispatch: Dispatch<AnyAction>) => {
    try {
        dispatch(setLoading());
        localStorage.removeItem('accessToken');
        navigate('/login');   
    } catch (error) {
        // const {data} = error?.response
        console.log(error)
        notification.error({message: 'Incorrect Credentials'})
        // openNotification({type: 'error', title: 'Incorrect Credentials', description: data.message})
        dispatch(disableLoading());
    }
}