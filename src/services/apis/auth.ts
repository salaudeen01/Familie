import { useDispatch } from "react-redux"
import { NavigateFunction, useNavigate } from "react-router-dom"
import { setAuth } from "../../stores/slice/auth";

import axiosInstance from "../axios";
import { Dispatch, AnyAction } from "@reduxjs/toolkit";

//  const dispatch = useDispatch();
//  const navigate = useNavigate();

export const authUser =async (data: { email: string; password: string; }, navigate: NavigateFunction, dispatch: Dispatch<AnyAction>) => {
    try {
        const response = await axiosInstance(navigate).post('/login', data);
        console.log(response)
        if (response.data) {
            localStorage.setItem('accessToken', response?.data?.access_token)
            dispatch(setAuth(response.data))
            navigate('/');            
        }
    } catch (error) {
        console.log(error)
    }
}