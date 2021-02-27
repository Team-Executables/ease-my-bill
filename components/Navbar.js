import Link from 'next/link';

const Navbar = () => {
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