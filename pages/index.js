import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ease My Bill</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />
      </Head>

      {/* Design Landing Page here */}
      <main>
        <div className="row align-items-center">
          <div className="col-md-6 left-panel d-flex justify-content-center">
            <p>
              Managing Bills Made Easy <br/>
              Login To See How It Works !
              <Link href="/login/"><a class="nav-link">LOGIN</a></Link>
            </p>
          </div>
          <div className="col-md-6 right-panel">
            <img src="/logo.png" alt="Ease My Bill"/>
          </div>
        </div>
        <div className="row justify-content-evenly">
          <div className="col-md-4 card-holder">
            <div className="card">
              <img src="/database.jpg" alt="Store Data" className="card-img-top"/>
              <div className="card-body">
                <h5 className="card-title">Easy To Use</h5>
                <p className="card-text">
                  Maintain record of consumers in one go. Upload a CSV/Excel or make entries.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 card-holder">
            <div className="card">
              <img src="/razorpay.jfif" alt="Razorpay" className="card-img-top"/>
              <div className="card-body">
                <h5 className="card-title">Powered By RazorPay</h5>
                <p className="card-text">
                  Use one of the safest, fastest and reliable payment systems in India: RazorPay
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 card-holder">
            <div className="card">
              <img src="/money.jpg" alt="No Cost" className="card-img-top"/>
              <div className="card-body">
                <h5 className="card-title">Zero Cost</h5>
                <p className="card-text">
                  Amazing features like Maintaining Records and Daily Reminders at absolutely zero cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}