import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../redux/features/themeSlice';
import { Link } from 'react-router-dom';

function Header() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.value);

    return (
        <div className={theme}>
            <header className="flex fixed z-10 flex-wrap border-b  dark:border-slate-700 sm:justify-start sm:flex-nowrap w-full  text-sm py-4 backdrop-filter backdrop-blur-lg bg-opacity-80">
                <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between" aria-label="Global">
                    <a className="sm:order-1 flex-none text-xl font-semibold dark:text-white text-black" href="#">Brand</a>
                    <div className="sm:order-3 flex items-center gap-x-2">
                    <button type="button" className="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-alignment" aria-controls="navbar-alignment" aria-label="Toggle navigation">
                        <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                        <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                    
                    <div className="">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" checked={theme === "dark"} className="sr-only peer" onClick={() => dispatch(toggle())} />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-600"></div>

                            {
                                theme === "dark" ?
                                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Light </span>
                                    :
                                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"> Dark </span>
                            }
                        </label>
                    </div>
                    </div>
                    <div id="navbar-alignment" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2">
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
                        
                        <Link to="/" className="font-medium text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"  aria-current="page">Landing</Link>        
                        <Link to="/login" className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >Login</Link>
                        <Link to="logout" className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >Logout</Link>
                        <Link to="#" className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >Work</Link>
                        
                    </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header