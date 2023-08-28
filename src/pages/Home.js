import Header from '~/components/Header/Header';
import Navbar from '~/components/Navbar/Navbar';

function Home() {
    return (
        <div>
            <div className="w-screen bg-[#333333]">
                <Header />
            </div>
            <div className="w-screen bg-[#FC8F00]">
                <Navbar />
            </div>
            <img src="../../public/images/banner.png" alt="Banner" />
            <div className="w-screen bg-[#000]">OKVIP</div>
        </div>
    );
}

export default Home;
