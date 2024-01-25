import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

import ShadComp from '../Pages/ShadComp'
import CrausalCard from '../Pages/CrausalCard'
import { Button } from '../ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../ui/card"
  
  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "../ui/alert-dialog"


function LogoutButton() {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        console.log("Logout");
        navigate('/');
    };

    return (
        <div className='p-40 flex flex-col justify-center gap-10 dark:bg-slate-900'>
            {/* <button onClick={handleLogout}>Log out</button> */}
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="destructive" onClick={handleLogout}>Logout</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure to Logout?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            <Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
            <div className='flex gap-40 sm:flex-col'>

            <ShadComp />

            <CrausalCard />
            </div>

        </div>
    );
}

export default LogoutButton;