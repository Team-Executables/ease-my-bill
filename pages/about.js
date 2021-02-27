import Head from 'next/head'

const About = () => {
    return ( 
        <div>
            <Head>
            <title>Ease My Bill - Login</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />
            </Head>
            <main id="about">
                <div className="container-md">
                    <p>This project - <strong>Easy My Bill</strong> was made during HackerBash 2021 organized by CSI. <br/>
                    Our team - The Executables have made use of Next.js, Firebase Firestore, Bootstrap, RazorPay and Send Grid APIs as our tech stack to make this app. <br/>
                    Go to the link of our <a href="https://github.com/Team-Executables/ease-my-bill">Github Repository</a> and find the source code</p>
                </div>
            </main>
        </div>

    );
}
 
export default About;