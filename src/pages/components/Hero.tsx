import Image from 'next/image'
import dev from '/public/daooda.png'

const Hero = () => {

    return (
        <div className='relative'>
            <div className='absolute inset-0 blur-xl h-[580px]' style={{ background: "linear-gradient(180deg, rgba(192, 132, 252, 0) 20.79%, rgb(119, 150, 255, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)" }}></div>
            <div className='relative'>
                <section>
                    <div className="max-w-screen-xl mx-auto px-4 py-2 gap-12 items-center text-dark overflow-hidden md:px-8 md:flex">
                        <div className='flex-none space-y-5 max-w-xl'>
                            <h1 className="text-4xl text-dark font-extrabold mx-auto md:text-5xl">
                                Daouda BA 👨🏽‍💻
                            </h1>
                            <h1 className="text-4xl text-dark font-extrabold mx-auto md:text-5xl">
                                FullStack <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#FEA36D]">Developer</span>, Opensourcer <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#FEA36D]">contributor</span>, Flutter <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#FEA36D]">Enthutiast</span>
                            </h1>
                            <p>
                                creating cool stuff line after line.
                            </p>
                            <a href="#" className='inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white'>
                                <span className='inline-block rounded-full px-3 py-1 bg-primary text-white'>
                                    Blog
                                </span>
                                <p className='flex items-center'>
                                    Read my last article
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </p>
                            </a>
                        </div>
                        <div className='flex-1 hidden md:block'>
                            <Image
                                className="max-w-xl"
                                width={450}
                                height={450}
                                alt="Hero"
                                src={dev}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Hero
