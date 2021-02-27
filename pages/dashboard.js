import { useReducer } from "react";
import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import initFirebase from '../services/firebase';
import 'firebase/firestore';

const Dashboard = () => {
    
    initFirebase();
    const auth = firebase.auth();
    const [user] = useAuthState(auth);
    const db = firebase.firestore();

    const getData = async () => {
        const user_doc = await db.collection('users').doc(user.uid).get();
        const data = user_doc.data();
        console.log(data) 
        return data
    }

    db.collection('users').doc(`${user.uid}`).set({
        email: user.email,
        flag: 1
      })
      .then(() => {
          console.log("Document successfully written!");
          return getData()
      })
      .then((data) => {
        console.log(data.flag)
        console.log(user.email)
        if(data.flag == 1) {
            fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ from_name: 'Ease My Bill', email: user.email, template: 'd-0dfe75fa777d4b698973b7bb2ba80b9a' })
            });
        }
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });

      
    

    return (
        <>
            {user.email}
            <p>Dashboard</p>
            
        </>
    );
}
 
export default Dashboard;

