// import { useEffect } from 'react';
// import { useAnimation, motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { renderText } from '../../Function/GeneratedFunction';
// import { revealVariants } from '../../Function/AnimatedFunction/AnimatedFunction';
import model from "../../assets/image/model.jpg"
import model2 from "../../assets/image/model2.jpg"
import model3 from "../../assets/image/model3.jpg"
import model4 from "../../assets/image/model4.jpg"
import { FiDownload } from "react-icons/fi";

const Home = () => {
  // const controls = useAnimation();
  // const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4,delay: 3 });

  // useEffect(() => {
  //   if (inView) {
  //     controls.start('visible');
  //   }
  // }, [inView, controls]);

  return (
    // <section
    //   ref={ref}
    //   data-scroll-section
    //   style={{
    //     minHeight: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     flexDirection: 'column',
    //   }}
    // >
    //   <motion.h1
    //     className="text-3xl font-bold mb-4 text-white"
    //     initial="hidden"
    //     animate={controls}
    //     variants={revealVariants()}
    //   >
    //     {renderText({
    //       text: 'Welcome to My Portfolio',
    //       controls,
    //       variants: revealVariants(),
    //     })}
    //   </motion.h1>

    //   <motion.h1
    //     className="text-3xl font-bold mb-4 text-white"
    //     initial="hidden"
    //     animate={controls}
    //     variants={revealVariants()}
    //   >
    //     {renderText({
    //       text: 'Hello, I am John Doe',
    //       controls,
    //       variants: revealVariants(),
    //     })}
    //   </motion.h1>
    // </section>
    <>
      <div className="min-h-[92vh] w-screen relative overflow-hidden">
        <div className="pt-25 bg-yellow w-full p-4 flex align-center justify-center">
          <div className=" flex items-center justify-center">
            <div className="text-white text-3xl text-center font-Poppins tracking-wider" style={{ fontFamily: "Poppins", lineHeight: 1.2 }}>

              {/* <h1 className="mb-1 flex align-center justify-center bg-green-500">I'am <span className="bg-clip-text text-transparent text-6xl" style={{ fontWeight:550,fontFamily: "cursive", backgroundImage: "radial-gradient(circle,rgba(255, 255, 255, 1) 40%, rgb(131, 131, 131) 100%)" }}>Pushpak Jangela</span><span className="overflow-hidden rounded-full" style={{height:"7vh"}}><img className="object-cover object-top w-full h-full" style={{height:"100%",width:"100%"}} src={model} alt="" /></span> </h1> */}
              <h1 className="flex items-center justify-center text-3xl">
                <span className="text-5xl font-bold bg-clip-text text-transparent ml-2" style={{
                  fontWeight: 550,
                  fontFamily: "cursive", backgroundImage: "radial-gradient(circle,rgba(255, 255, 255, 1) 40%, rgb(131, 131, 131) 100%)", lineHeight: 1.7
                }}>Pushpak Jangela</span>
                <span className="overflow-hidden rounded-full w-22 h-9 ml-2">
                  <img className="object-cover w-full h-full" src={model} />
                </span>
              </h1>

              <h1 className="flex items-center justify-center text-3xl" style={{ lineHeight: 1.6 }}> Senior
                <span className="overflow-hidden rounded-full w-22 h-9 ml-2 mr-2 ">
                  <img className="object-cover w-full h-full" src={model} />
                </span>
                Software Engineer</h1>
              <h1 className="flex items-center justify-center text-3xl" style={{ lineHeight: 1.6 }}>passionate
                <span className="overflow-hidden rounded-full w-22 h-9 ml-2 mr-2 ">
                  <img className="object-cover w-full h-full" src={model} />
                </span>
                about crafting
                <span className="overflow-hidden rounded-full w-22 h-9 ml-2 mr-2 ">
                  <img className="object-cover w-full h-full" src={model} />
                </span>
                seamless</h1>
              <h1 style={{ lineHeight: 1.6 }} className="text-3xl flex items-center gap-2">
                frontend experiences
                <span
                  className="overflow-hidden rounded-full w-12 h-12 "
                // style={{ height: "7vh", width: "7vh" }}
                >
                  <img
                    className="w-full h-full object-cover object-center"
                    src={model}
                    alt=""
                  />
                </span>

                <span
                  className="overflow-hidden rounded-full w-12 h-12 ml-[-30px]"
                // style={{ height: "7vh", width: "7vh" }}
                >
                  <img
                    className="w-full h-full object-cover object-center"
                    src={model2}
                    alt=""
                  />
                </span>
                <span
                  className="overflow-hidden rounded-full w-12 h-12 ml-[-30px]"
                // style={{ height: "7vh", width: "7vh" }}
                >
                  <img
                    className="w-full h-full object-cover object-center"
                    src={model3}
                    alt=""
                  />
                </span>
                <span
                  className="overflow-hidden rounded-full w-12 h-12 ml-[-30px]"
                // style={{ height: "7vh", width: "7vh" }}
                >
                  <img
                    className="w-full h-full object-cover object-center"
                    src={model4}
                    alt=""
                  />
                </span>
                and delivering
              </h1>

              <h1 style={{ lineHeight: 1.6 }} className="text-3xl flex items-center align-center justify-center">robust backend solutions
                <span className="overflow-hidden rounded-full w-22 h-9 mx-2">
                  <img
                    className="object-cover object-center w-full h-full"
                    src={model}
                    alt=""
                  />
                </span>
              </h1>
              {/* <h2 className="text-5xl mb-4 bg-yellow-700 mb-[12px]" >I'm 
                  <span className="text-6xl font-bold bg-clip-text text-transparent" >
                  Pushpak Jangela
                  <span className="w-12 h-12 overflow-hidden rounded-full bg-green-500">
                    
                    <img src={model} alt="Avatar" className="object-cover w-full h-full w-full h-full" />
                  </span>

                </span>

                </h2>

                <span className="text-5xl " style={{ fontFamily: "Poppins", paddingTop: "90px", }}> a Senior Software Engineer  <br /> </span> <span style={{ fontFamily: "Poppins" }}>passionate about crafting seamless
                </span><br />frontend experiences and delivering <br />robust backend solutions.</div> */}
            </div>
          </div>

        </div>
        <div>
          <h1 className="text-white text-xl tracking-normal text-center opacity-60 pt-4">I bring ideas to life on the web — crafting intuitive frontend designs  and  efficient backend <br /> logic that together make high-performing, responsive websites.</h1>
        </div>
        <div className="w-full flex items-center justify-center mt-10">

          <div className="flex items-center justify-center gap-2 py-1 px-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 w-fit">
            <div className=" flex items-center justify-center">
              <FiDownload className="text-xl text-zinc-300 font-semibold" />
            </div>
            <div>
              <h1 className="text-lg flex items-center justify-center font-semibold tracking-wider text-zinc-300">
                Download Resume
              </h1>
            </div>
          </div>
        </div>


        {/* <div className="">

          <h1 className="text-white text-6xl absolute top-35 left-133 center ">
            <span className="text-6xl font-serif" style={{ color: theme?.colors?.black_60 }}>I'm</span>
            <span className="px-2 text-7xl pl-4 bg-clip-text text-transparent"
              style={{ backgroundImage: "radial-gradient(circle,rgba(255, 255, 255, 1) 40%, rgb(131, 131, 131) 100%)", fontFamily: "cursive", letterSpacing: "1px" }}
            >Pushpak</span>
            <span className="w-22 h-15 absolute left-92 top-2 overflow-hidden bg-top bg-conver rounded-full">
              <img src={model} alt="Avatar" className="object-cover object-top " />
            </span>
          </h1>
          <h1 className="text-white text-6xl absolute left-112 top-57 tracking-wider opacity-90" style={{ color: theme?.colors?.white_60 }}>A <span>Frontend</span> Developer</h1>
          <h1 className="text-white text-6xl absolute left-96 top-76 flex gap-3 opacity-90" style={{ color: theme?.colors?.white_60 }}>
            <span>With</span>

            <span>

              Solid
            </span>
            <span className="w-20 h-14 overflow-hidden bg-top bg-conver rounded-full">
              <img src={model} alt="Avatar" className="object-cover object-top w-20 h-15 rounded-full" />
            </span>
            <span>

              Backend Skills.
            </span>
          </h1>
          <h1 className="text-white text-lg absolute left-98 top-106 opacity-60 text-center">I bring ideas to life on the web — crafting intuitive frontend designs  and  efficient backend <br /> logic that together make high-performing, responsive websites.</h1>
        </div> */}
        {/* <div className="absolute bottom-20 left-124 rounded-2xl backdrop-blur-lg bg-white/7 shadow-2xl bg-background/100 items-center justify-center p-4 px-6">

          <div className="text-white" >
            <div className=" w-full flex justify-start">
              <ShinyText className="text-3xl">20</ShinyText>
              <span className="text-2xl text-white -mt-2" >+</span>
            </div>
            <h3 className="text-white text-sm w-20 text-wrap text-zinc-400 pt-1">Implemented Design</h3>
          </div>
        </div>
        <div className="absolute bottom-20 left-162 rounded-2xl backdrop-blur-lg bg-white/7 shadow-2xl bg-background/100 items-center justify-center p-4 px-6">

          <div className="text-white" >
            <div className=" w-full flex justify-start">
              <h1 className="text-3xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: "radial-gradient(circle,rgba(255, 255, 255, 1) 40%, rgb(131, 131, 131) 100%)" }}>7
              </h1>
            </div>
            <h3 className="text-white text-sm w-20 text-wrap text-zinc-400 pt-1">Production Builds</h3>
          </div>
        </div>
        <div className="absolute bottom-20 left-200 rounded-2xl backdrop-blur-lg bg-white/7 shadow-2xl bg-background/100 items-center justify-center p-4 px-6">

          <div className="text-white" >
            <div className=" w-full flex justify-start">
              <h1 className="text-3xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: "radial-gradient(circle,rgba(255, 255, 255, 1) 40%, rgb(131, 131, 131) 100%)" }}>7
              </h1>
              <span className="text-3xl text-white -mt-2" >+</span>
            </div>
            <h3 className="text-white text-sm w-20 text-wrap text-zinc-400 pt-1">Implemented Design</h3>
          </div>
        </div> */}


        {/* Code. Design. Deliver — One Pixel at a Time. */}
        {/* From Wireframe to Wow — I Build the Web. */}


        <div>

        </div>

      </div>
    </>
  );
};

export default Home;
