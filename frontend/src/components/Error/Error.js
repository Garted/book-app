import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { clearError, selectErrorMessage } from '../../redux/slices/errorSlice';

const Error = () => {
    const errorMessage = useSelector(selectErrorMessage);
    const dispatch = useDispatch();

    useEffect(() => {
        if (errorMessage) {
            toast.info(errorMessage);
            dispatch(clearError());
        }
    }, [errorMessage, dispatch]);

    return <ToastContainer position="top-right" autoClose={1500} />;
};

export default Error;
