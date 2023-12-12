import React from "react";

function Footer(){
    return(
        <>
    <footer class="py-14 md:pt-32 mt-14  text-white lg:px-[3rem]">
        <div class="container lg:flex grid md:grid-cols-2 gap-y-5 gap-x-10 sm:mx-auto justify-between">
            <div class="footer-card lg:max-w-sm">
                <div class="flex items-center gap-2">
                    <h1 class="font-cursi w-10 h-10 bg-green-500 rounded-full text-white text-xl text-center leading-10 font-bold">N</h1>
                    <p class="text-green-500 font-bold text-xl">Netcopt</p>
                </div>
                <p class="mt-6">netcopt is a team of creative developers who have an interest in design. We create design templates, UI kits and other products that make people's work easier and faster.</p>
                <ul class="flex gap-3 mt-3">
                    <li><a href="#"><ion-icon class="text-xl border p-2 rounded-full" name="logo-github"></ion-icon></a></li>
                    <li><a href="#"><ion-icon class="text-xl border p-2 rounded-full" name="logo-instagram"></ion-icon></a></li>
                    <li><a href="#"><ion-icon class="text-xl border p-2 rounded-full" name="logo-youtube"></ion-icon></a></li>
                    <li><a href="#"><ion-icon class="text-xl border p-2 rounded-full" name="logo-facebook"></ion-icon></a></li>
                </ul>
            </div>
            <ul>
                <li><p class="text-xl font-bold text-white mb-2">Product</p></li>
                <li class="mb-1"><a href="#">social feed</a></li>
                <li class="mb-1"><a href="#">reach UI kit</a></li>
                <li class="mb-1"><a href="#">statisla design</a></li>
                <li class="mb-1"><a href="#">more product</a></li>
               
            </ul>
            <ul>
                <li><p class="text-xl font-bold text-white mb-2">Company</p></li>
                <li class="mb-1"><a href="#">about us</a></li>
                <li class="mb-1"><a href="#">contacts</a></li>
                <li class="mb-1"><a href="#">privaci policy</a></li>
                <li class="mb-1"><a href="#">team of services</a></li>
                <li class="mb-1"><a href="#">helf</a></li>
            </ul>
            <ul>
                <li><p class="text-xl font-bold text-white mb-2">Get in touch</p></li>
                <li class="mb-1"><a href="#">twitter</a></li>
                <li class="mb-1"><a href="#">facebook</a></li>
                <li class="mb-1"><a href="#">dribble</a></li>
            </ul>
        </div>
        <div class="container -py-5 mt-16 md:mt-32">
            <p class="text-center text-[.9rem0">COPYRIGHT © 2022 — DESIGN NAUVAL</p>
        </div>
    </footer>


        </>
    )
}

export default Footer;