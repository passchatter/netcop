import React from "react";
import Navbar from "../components/Navbar";
import Filtur from "../components/Filtur";
import about from "../image/about.png";
import aboutdua from "../image/abaout2.png" 
import {useState} from "react";
import Footer from "../components/Footer";
function Home(){

    const [selected, seSelected] = useState(false);

    const toggle=(i)=>{
      if(selected === i){
        return seSelected(false)
      }

      seSelected(i)
    }

    return(
        <>
         <Navbar/>
         <div className="hero h-screen bg-hero bg-no-repeat bg-cover bg-end md:bg-center ">
            <div className="container pt-36 md:pt-48 ">
                <div className="lg:max-w-5xl">
                <h1 className="text-slate-200 font-bold md:text-5xl text-5xl lg:text-7xl 2xl:text-8xl leading-[3.5rem] lg:leading-[6rem]">Unlimited movies, TV shows and more</h1>
                <p className=" text-slate-300 text-sm leading-[1.6rem] md:text-xl lg:pr-[7rem] mt-4 lg:mt-6">Enjoy an unforgettable movie watching experience with thousands of the latest and classic film titles available on our platform. With the latest streaming technology, we ensure sharp and clear image and sound quality so you can enjoy every scene and detail to the fullest.</p>
                
                <div className="max-w-max mt-16 flex flex-wrap gap-2">
                    <input type="text" placeholder="Enter yout email..." className="w-[500px] md:text-2xl bg-transparent text-white border-2 border-green-500 rounded-lg px-5 py-3" />
                    <button className="text-white bg-green-500 md:px-4 rounded-md py-3 px-6 font-semibold mt-3 md:mt-0">Start Now</button>
                </div>
                </div>
            </div>
            <Filtur/>
            

            <div className="grid md:grid-cols-2 container mt-20 items-center">
                <div className="">
                    <h1 className="text-4xl text-white font-semibold mb-5 lg:text-6xl">Enjoy in your TV</h1>
                    <p className="text-white">Welcome to netcopt, the best destination for movie lovers! Here, you'll find an unrivaled cinematic experience with a wide and diverse collection of films. From riveting dramas to thrilling action, we offer all kinds of movies to suit your tastes and interests.</p>
                    <p className="text-white">Join us as we explore the world of cinema and reveal the charms of films of various genres. Whether you are a classic film buff who admires the beauty of black and white silk, or a modern film lover who is passionate about state-of-the-art special effects, we have everything to satisfy your needs.</p>
                </div>
                <div className="">
                    <img src={about} alt="" />
                </div>
            </div>

            <div className="grid md:grid-cols-2 container py-20 items-center">
                <div className="order-1">
                    <img src={aboutdua} alt="" />
                </div>
                <div className="lg:order-1">
                    <h1 className="text-4xl text-white font-semibold mb-5 lg:text-6xl">Watch anywhere</h1>
                    <p className="text-white">Welcome to netcopt, the best destination for movie lovers! Here, you'll find an unrivaled cinematic experience with a wide and diverse collection of films. From riveting dramas to thrilling action, we offer all kinds of movies to suit your tastes and interests.</p>
                </div>
            </div>

            <div className="container py-20">
                <h1 className="text-white text-4xl text-center font-bold">FAQ</h1>
                <div className="accordion mt-14 w-full md:w-[89%] mx-auto lg:w-[80%]">
                    {data.map((item, i)=>{
                        return <div className="item mt-3 bg-blue-950 p-5 rounded-lg" key={i} onClick={()=>toggle(i)}>
                        <div className="title flex justify-between mb-6">
                            <h1 className="text-white font-semibold text-2xl rounded-lg  ">{item.question}</h1>
                            <span className="text-white text-3xl duration-300">{selected === i ? "-" : "+"}</span>
                        </div>
                        <div className={`h-[50px] ${selected === i ? "acordion show" : "acordion"}`}>
                            <p className="text-white">{item.answer}</p>
                        </div>
                    </div>
                    })}
                </div>
            </div>
            <Footer/>
          </div>
         
        </>
    )
}


const data = [
    {
        question:"What is netcopt",
        answer:`netcopt is a streaming service that offers a variety of award-winning TV shows, movies, anime, documentaries and more on thousands of Internet-connected devices.
                You can watch to your heart's content, whenever you want, without a single ad – all for one low monthly price. There's always something new to watch and new TV shows and movies added every week!`
    },
    {
        question:"where can i watch",
        answer:`Watch anywhere, anytime. Sign in to a netcopt account to watch live on netflix.com from a personal computer or on any Internet-connected device that supports netcopt apps, including smart TVs, smartphones, tablets, streaming media players, and game consoles.
                You can also download your favorite shows with the iOS, Android, or Windows 10 apps. Use downloads to watch when you're on the move and don't have an Internet connection. Take netcopt anywhere.`
    },
    {
        question:"what can be watched on netcopt",
        answer:`netcopt has an extensive library of feature films, documentaries, TV shows, anime, award-winning original netcopts, and more. Watch to your heart's content, whenever you want.`
    },
    {
        question:"Is NetCopt suitable for children?",
        answer:`The netcopt Kids experience is included with membership so you have parental control while your kids enjoy TV shows and movies for the family back home.
                A child's profile includes PIN-protected parental controls so you can limit the age rating of the content that children can watch and block certain titles that children are not allowed to watch.`
    }
 ];

export default Home;