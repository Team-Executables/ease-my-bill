import { useReducer } from "react";
import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import initFirebase from '../services/firebase';

const Dashboard = () => {
    
    initFirebase();
    const auth = firebase.auth();
    const [user] = useAuthState(auth);

    return (
        <>
            {user.email}
            <p>Dashboard</p>
        </>
    );
}
 
export default Dashboard;