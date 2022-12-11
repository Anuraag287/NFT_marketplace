import banner from "../images/itemm.png";
import logo1 from "../images/logo.png";
import background from "../images/boat.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Home() {
	return (
        <><Navbar></Navbar><main class="dark:bg-gray-800 bg-white relative overflow-hidden z-0">
            <div style={{ backgroundImage: `url(${background})`, height: '100vh', width: '100vw', backgroundRepeat: "no-repeat", backgroundSize: 'cover', }}>
                <div class="container mx-auto pt-6 flex relative py-16">
                    <div class="sm:w-2/3 lg:w-20/5 flex flex-col relative z-20">
                        <img src={logo1} class=" md:max-w-lg m-auto" />
                        <h1 class="font-bebas-neue uppercase text-3xl sm:text-2xl font-black flex flex-col leading-none dark:text-black text-gray-800 text-center">
                            Presenting Infitity
                        </h1>
                        <p class="text-sm sm:text-base text-gray-700 dark:text-black text-center ">
                            an Environment conscious NFT marketplace
                        </p>
                        <p class="text-sm sm:text-base text-gray-700 dark:text-black text-center ">
                            to sell and buy your next digital art
                        </p>
                        <div class="flex flex-col">
                            <a
                                href="/"
                                class="uppercase py-2 px-6 rounded-lg bg-black border-2 border-transparent-500 text-white hover:bg-white-600 text-md text-center"
                            >
                                Marketplace
                            </a>
                            <a
                                href="/sellNFT"
                                class="uppercase py-2 px-6 rounded-lg bg-white border-2 border-transparent-500 text-black hover:bg-black-600 text-md text-center"
                            >
                                Mint NFTs
                            </a>
                        </div>
                    </div>
                    <div class="hidden sm:block sm:w-2/3 lg:w-4/5 relative">
                        <img src={banner} class=" md:max-w-lg m-auto" />
                    </div>
                </div>
            </div>
        </main><Footer></Footer></>


	);
}

export default Home;