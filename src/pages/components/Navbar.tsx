import { useState } from 'react'

const Navbar = () => {
    const [state, setState] = useState(false)

    return (
        <nav className="bg-white/70 w-full sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-sm">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a className='text-dark text-lg font-medium' href="#">
                        daooda.dev
                    </a>
                    <div className="md:hidden">
                        <button className="text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        <li className="text-lg font-medium text-dark">
                            <a href="#" className="mx-5 hover:text-primary">
                                /blog
                            </a>
                            <a href="#" className="mx-5 hover:text-primary">
                                /career
                            </a>
                            <a href="#" className="mx-5 hover:text-primary">
                                /projects
                            </a>
                            <a href="#" className="mx-5 hover:text-primary">
                                /contact
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" className="text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/daoodaba975" target="_blank" className="text-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .3c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.088-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.838 2.809 1.305 3.495.998.108-.776.42-1.305.764-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.385 1.235-3.22-.135-.306-.54-1.53.105-3.185 0 0 1.005-.322 3.3 1.235.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.557 3.285-1.235 3.285-1.235.645 1.655.24 2.88.12 3.185.765.835 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.895-.015 3.28 0 .315.21.69.825.57C20.565 22.1 24 17.602 24 12.3c0-6.63-5.37-12-12-12z"/></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
