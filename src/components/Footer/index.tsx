import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <>
                <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="http://localhost:3000/" className="hover:underline">Ремонт CRM™</Link>. All Rights Reserved.</span>
                        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                            <li>
                                <Link to="/about" className="mr-4 hover:underline md:mr-6 ">О нас</Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="mr-4 hover:underline md:mr-6">Политика конфиденциальности</Link>
                            </li>
                            <li>
                                <Link to="/contacts" className="hover:underline">Контакты</Link>
                            </li>
                        </ul>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;