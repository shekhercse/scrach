import React from 'react'
import Image from 'next/image'
import banner from "../public/banner.svg"


function Content () {
    return (
        <>
            <section0 className="  flex justify-center items-center px-10 py-1 mx-10 my-1">

                <div className="  flex justify-center items-center">

                    <h1 className=" selection:bg-fuchsia-300 selection:text-fuchsia-900 font-mono text-2xl text-center flex-auto px-5 py-5 mx-5 my-5">
                        Hello my name is Chander Shekher <br />
                        I design and develop things for WEB.
                    </h1>

                </div>
                <Image
                    src={banner}
                    alt="Picture of the author"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
                />
            </section0>
            <section1 id="about">


                <div className=" selection:bg-fuchsia-300 selection:text-fuchsia-900 font-mono  flex flex-col justify-center items-center px-10 mx-10">
                    <h2 className="text-2xl text-bold py-20 ">
                        ABOUT ME
                    </h2>
                    <h3 className="py-10">
                        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
                    </h3>
                </div>
                <div div className=" font-mono flex justify-center px-10 mx-10">

                    <div className=" selection:bg-fuchsia-300 selection:text-fuchsia-900 flex flex-col basis-1/2 justify-center items-center">
                        <h2 className=" text-2xl text-bold py-10">
                            Get to know me!
                        </h2>
                        <p className="placeholder:italic">
                            I m a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.<br />I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming.<br /> I m open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don t hesitate to contact me.
                        </p>
                    </div>
                    <div className="flex flex-col basis-1/2  items-center">
                        <h2 className=" text-2xl text-bold py-10">
                            My Skills
                        </h2>
                        <div className=" grid grid-cols-4 gap-4">
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-green-50 rounded-lg  text-center "> HTML</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-green-50 rounded-lg  text-center "> React JS</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-green-50 rounded-lg  text-center ">Next JS</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-green-50 rounded-lg  text-center "> Gatsby JS</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-green-50 rounded-lg  text-center "> CSS</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-green-50 rounded-lg  text-center "> Java ScriptS</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-green-50 rounded-lg  text-center "> Frontend development</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-green-50 rounded-lg  text-center "> Backend development</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-green-50 rounded-lg  text-center "> Database</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-green-50 rounded-lg  text-center "> Website</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-green-50 rounded-lg  text-center "> Web Applications</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-green-50 rounded-lg  text-center "> E-commerce websites</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-green-50 rounded-lg  text-center "> Business websites</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-green-50 rounded-lg  text-center "> Responsive</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-green-50 rounded-lg  text-center "> IT technical Support</div>
                            <div className="mx-4 my-2 px-1 py-1 border-current bg-green-50 rounded-lg  text-center "> PC Laptop Support</div>
                        </div>
                    </div>
                </div>

            </section1>
            <section2>
                <div id="work">

                </div>
            </section2>

        </>
    )
}

export default Content