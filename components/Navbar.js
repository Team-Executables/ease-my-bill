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
                <li class="nav-item"><Link href="/"><a class="nav-link">HOME</a></Link></li>
                <li class="nav-item"><Link href="/about"><a class="nav-link">ABOUT</a></Link></li>
                <li class="nav-item"><Link href="/dashboard"><a class="nav-link">DASHBOARD</a></Link></li>
                <li class="nav-item"><Link href="/login/"><a class="nav-link">LOGIN</a></Link></li>
            </ul>
        </nav>
    );
}
 
export default Navbar;