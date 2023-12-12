import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar(){
  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const offset = window.pageYOffset;
    if (offset > 0 && !scrolled) {
      setScrolled(true);
    } else if (offset === 0) {
      setScrolled(false);
    }
  };

  

    let [open, setOpen] = useState(false);
    const navigate = useNavigate();
    return(
      <>
        <header className={`fixed top-0 left-0 py-5 w-full z-30 ${scrolled ? 'active_header' : 'bg-transparent'}`}>
           <div className="container">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <p className="w-10 h-10 text-white bg-green-500 text-2xl font-bold leading-10 text-center rounded-full">N</p>
                   <h1 className="text-2xl font-bold lg:text-4xl text-green-500">Netcopt</h1>
                </div>

                <div className={`absolute md:static md:w-auto md:bg-transparent shadow-lg md:shadow-none duration-300 top-0 left-0 bg-slate-200 w-full p-4 md:h-auto h-[50vh] ${open ? 'top-0' : 'top-[-1000%]'}`}>
                    <div className="flex items-center gap-4 md:hidden">
                        <p className="w-10 h-10 text-white bg-green-500 text-2xl font-bold leading-10 text-center rounded-full">N</p>
                        <h1 className="text-2xl font-bold lg:text-4xl text-green-500">Netcopt</h1>
                    </div>

                    <ul className="flex md:flex-row flex-col gap-7 mt-10 md:mt-0">
                      <li><a onClick={()=> navigate('/')} className="lg:text-xl text-black md:text-green-500 font-semibold">Home</a></li>
                      <li><a onClick={() => navigate('/catalog')} className="lg:text-xl text-black md:text-green-500 font-semibold">Catalog</a></li>
                      <li><a onClick={()=> navigate('/searching')} className="lg:text-xl text-black md:text-green-500 font-semibold">Searching</a></li>
                      <li><a className="lg:text-xl text-black md:text-green-500 font-semibold">Services</a></li>
                      <li><a className="lg:text-xl text-black md:text-green-500 font-semibold">Contact</a></li>
                    </ul>
                </div>
              
              <div  onClick={()=> setOpen(!open)} className="text-4xl md:hidden menu-navbar">
                 <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
              </div>

             </div>
           </div>
        </header>
      </>
    )
}

export default Navbar;