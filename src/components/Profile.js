import Naresh from "../images/naresh.jpg";
import Vikram from "../images/vikram.jpg";
import Anuraag from "../images/anuraag.jpg";
import Akash from "../images/akash.jpg";
import Shreya from "../images/shreya.jpg";
import Vivek from '../images/vivek.jpg'
import Footer from "./Footer";
import Navbar from "./Navbar";
function Profile() {
	return (
        <><Navbar></Navbar><div class="p-1">
            <div class="flex items-center flex-col md:flex-row">
                <div class="p-11">
                    <div class="text-center mb-4 opacity-90">
                        <a href="#" class="block">
                            <img
                                alt="profil"
                                src={Naresh}
                                class="mx-auto object-cover rounded-full h-40 w-40 " />
                        </a>
                    </div>
                    <div class="text-center">
                        <p class="text-xl text-black-800 dark:text-black">Naresh Kumar Kaushal</p>
                        <p class="text-l text-black-500 dark:text-black-200 font-light">
                            Graduate Student
                        </p>
                        <p class="text-sm text-black-500 dark:text-black-400 max-w-xs py-4 font-light"></p>
                    </div>
                    <div class="pt-8 flex border-t border-black-200 w-44 mx-auto text-black-500 items-center justify-around">
                        <a href="#" alt="linkedin">
                            <svg
                                width="30"
                                height="30"
                                fill="currentColor"
                                class="text-xl hover:text-black-800 dark:hover:text-black transition-colors duration-200"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="p-4">
                    <div class="text-center mb-4 opacity-90">
                        <a href="#" class="block relative">
                            <img
                                alt="profil"
                                src={Anuraag}
                                class="mx-auto object-cover rounded-full h-40 w-40 " />
                        </a>
                    </div>
                    <div class="text-center">
                        <p class="text-xl text-black-800 dark:text-black">Anuraag Velamati</p>
                        <p class="text-l text-black-500 dark:text-black-200 font-light">
                            Graduate Student
                        </p>
                        <p class="text-sm text-black-500 dark:text-black-400 max-w-xs py-4 font-light"></p>
                    </div>
                    <div class="pt-8 flex border-t border-black-200 w-44 mx-auto text-black-500 items-center justify-around">
                        <a href="#" alt="linkedin">
                            <svg
                                width="30"
                                height="30"
                                fill="currentColor"
                                class="text-xl hover:text-black-800 dark:hover:text-black transition-colors duration-200"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="p-4">
                    <div class="text-center mb-4 opacity-90">
                        <a href="#" class="block relative">
                            <img
                                alt="profil"
                                src={Vikram}
                                class="mx-auto object-cover rounded-full h-40 w-40 " />
                        </a>
                    </div>
                    <div class="text-center">
                        <p class="text-xl text-black-800 dark:text-black">Vikraman Senthil Kumar</p>
                        <p class="text-l text-black-500 dark:text-black-200 font-light">
                            Graduate Student
                        </p>
                        <p class="text-sm text-black-500 dark:text-black-400 max-w-xs py-4 font-light"></p>
                    </div>
                    <div class="pt-8 flex border-t border-black-200 w-44 mx-auto text-black-500 items-center justify-around">
                        <a href="#" alt="linkedin">
                            <svg
                                width="30"
                                height="30"
                                fill="currentColor"
                                class="text-xl hover:text-black-800 dark:hover:text-black transition-colors duration-200"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="p-4">
                    <div class="text-center mb-4 opacity-90">
                        <a href="#" class="block relative">
                            <img
                                alt="profil"
                                src={Vivek}
                                class="mx-auto object-cover rounded-full h-40 w-40 " />
                        </a>
                    </div>
                    <div class="text-center">
                        <p class="text-xl text-black-800 dark:text-black">Vivek</p>
                        <p class="text-l text-black-500 dark:text-black-200 font-light">
                            Graduate Student
                        </p>
                        <p class="text-sm text-black-500 dark:text-black-400 max-w-xs py-4 font-light"></p>
                    </div>
                    <div class="pt-8 flex border-t border-black-200 w-44 mx-auto text-black-500 items-center justify-around">
                        <a href="#" alt="linkedin">
                            <svg
                                width="30"
                                height="30"
                                fill="currentColor"
                                class="text-xl hover:text-black-800 dark:hover:text-black transition-colors duration-200"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="p-4">
                    <div class="text-center mb-4 opacity-90">
                        <a href="#" class="block relative">
                            <img
                                alt="profil"
                                src={Akash}
                                class="mx-auto object-cover rounded-full h-40 w-40 " />
                        </a>
                    </div>
                    <div class="text-center">
                        <p class="text-xl text-black-800 dark:text-black">Sailendra Akash Bonagiri</p>
                        <p class="text-l text-black-500 dark:text-black-200 font-light">
                            Graduate Student
                        </p>
                        <p class="text-sm text-black-500 dark:text-black-400 max-w-xs py-4 font-light"></p>
                    </div>
                    <div class="pt-8 flex border-t border-black-200 w-44 mx-auto text-black-500 items-center justify-around">
                        <a href="#" alt="linkedin">
                            <svg
                                width="30"
                                height="30"
                                fill="currentColor"
                                class="text-xl hover:text-black-800 dark:hover:text-black transition-colors duration-200"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="p-4">
                    <div class="text-center mb-4 opacity-90">
                        <a href="#" class="block relative">
                            <img
                                alt="profil"
                                src={Shreya}
                                class="mx-auto object-cover rounded-full h-40 w-40 " />
                        </a>
                    </div>
                    <div class="text-center">
                        <p class="text-xl text-black-800 dark:text-black">
                            Shreya Gundu
                        </p>
                        <p class="text-l text-black-500 dark:text-black-200 font-light">
                            Graduate Student
                        </p>
                        <p class="text-sm text-black-500 dark:text-black-400 max-w-xs py-4 font-light"></p>
                    </div>
                    <div class="pt-8 flex border-t border-black-200 w-44 mx-auto text-black-500 items-center justify-around">
                        <a href="#" alt="linkedin">
                            <svg
                                width="30"
                                height="30"
                                fill="currentColor"
                                class="text-xl hover:text-black-800 dark:hover:text-black transition-colors duration-200"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div></>
	);
}
export default Profile;