import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
//import { useCollectionData } from 'react-firebase-hooks/firestore';
import initFirebase from '../services/firebase';
import Dashboard from './dashboard';
import Head from 'next/head'
import { useRouter } from 'next/router'

initFirebase();
const auth = firebase.auth();
//const firestore = firebase.firestore();


function App() {

  const [user] = useAuthState(auth);

  return (
    <div>
      <Head>
          <title>Ease My Bill - Login</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />
      </Head>
      <div className="App" id="login">
        <main>
          <div class="login-bg">
            <section>
              <SignOut />
              {user ? <Dashboard/> : <SignIn />}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )

}

function SignOut() {
  const router = useRouter()

  const handlepress = () => {
    auth.signOut()
    router.push('/')
  }

  return auth.currentUser && (
    <button className="sign-out" onClick={handlepress}>Sign Out</button>
  )
}

export default App;