import React from 'react';

const Footer = () => {
    return (
        <div>

            <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between h-20">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/https://flowbite.com/" className="hover:underline">EagleEye</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 ">
                        <li>
                            <a href="https://www.linkedin.com/in/disha-jain-90a554229" className="mr-4 hover:underline md:mr-6 ">Disha Jain</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Anshuman</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Yograj</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Siddhharth</a>
                        </li>
                    </ul>
                </div>
            </footer>

        </div>
    );
}

export default Footer;
