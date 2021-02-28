import { useReducer } from "react";
import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import initFirebase from '../services/firebase';
import 'firebase/firestore';
import Button from '../components/Button';

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
                body: JSON.stringify({ from_name: 'Ease My Bill', email: user.email, template: 'd-a1634fe9aa94456abf0587f1379fb045' })
            });
        }
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });

      const amount = 69
    

    return (
        <div>
            <div>
                <h1>Transaction History</h1>
                <button>
                    {/* Generate a Bill and Post to firebase */}
                </button>
            </div>
            <div>
                <h1>Bills</h1>
                {/* get data from firebase add 2 buttons create bill and pay bill*/}
                <Button amount={amount} uid={user.uid} email={user.email} ></Button>
            </div>
        </div>
    );
}
 
export default Dashboard;