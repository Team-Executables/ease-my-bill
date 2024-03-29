import firebase from 'firebase/app';
import Link from 'next/link';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import initFirebase from '../services/firebase';

const Navbar = () => {

    initFirebase();
    const auth = firebase.auth();
    const [user] = useAuthState(auth);

  return (
        <nav className="row align-items-center">
            <div className="logo col-md-6">
                <h1>Ease-My-Bill</h1>
            </div>
            <ul className="col-md-6 nav align-items-center justify-content-end">
                <li className="nav-item"><Link href="/"><a className="nav-link">HOME</a></Link></li>
                <li className="nav-item"><Link href="/about"><a className="nav-link">ABOUT</a></Link></li>
                <li className="nav-item"><Link href="/dashboard"><a className="nav-link">DASHBOARD</a></Link></li>
                <li className="nav-item"><Link href="/login/"><a className="nav-link">LOGIN</a></Link></li>
            </ul>
        </nav>
    );
}
 
export default Navbar;