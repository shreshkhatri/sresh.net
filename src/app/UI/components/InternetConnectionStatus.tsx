'use client'
import { useState, useEffect } from 'react';
import Snackbar from '@mui/joy/Snackbar';
import { IoClose } from "react-icons/io5";


export default function NetworkStatus() {
    const [isOnline, setIsOnline] = useState(true);
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };


    useEffect(() => {
        function handleOnline() {
            setIsOnline(true);
        }
        function handleOffline() {
            setIsOnline(false);
        }
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);



    return !isOnline ? <Snackbar open={open} color={"danger"} variant="solid" endDecorator={
        <span onClick={handleClose} style={{cursor:'pointer'}}><IoClose /></span>
    } >{"No Internet !"}</Snackbar> : null
}