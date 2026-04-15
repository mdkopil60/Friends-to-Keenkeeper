

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-green-900 text-base-content rounded p-10">
            <div>
                <h1 className="text-7xl text-white font-semibold mx-auto">Keenkeeper</h1>
                <p className="text-base-300">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            </div>
           
            <nav>
                <h2 className="text-2xl text-white">Social Links</h2>
                <div className="grid grid-flow-col gap-4">
                    <a>
                      <img src="/assets/facebook.png" alt="" />
                    </a>
                    <a>
                        <img src="/assets/twitter.png" alt="" />
                    </a>
                    <a>
                       <img src="/assets/instagram.png" alt="" />
                    </a>
                </div>
            </nav>
             <nav className="grid grid-flow-col gap-4 text-white">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <aside>
                <p className="text-base-300 ">Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;