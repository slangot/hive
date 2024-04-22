"use client"
import React, { useEffect, useRef, useState } from "react";

// imports
import bee1 from "../public/bee-1-sm-2.png";
import bee2 from "../public/bee-2.png";
import bee3 from "../public/bee-3.png";
import bg1Sm2 from "../public/bg-1-sm-2.jpg";
import boardSkills1 from "../public/board-skills-1.png";
import grassFlower1 from "../public/grass-flower-1.png";
import hiveAbbeal from "../public/hive-2-abbeal.png";
import hiveBtn1 from "../public/hive-btn-1-min.png";
import hiveLayout from "../public/hive-layout-2.png";
import logosX3_1 from "../public/logos-x3-1.png";
import logosX3_2 from "../public/logos-x3-2.png";
import logosX3_3 from "../public/logos-x3-3.png";
import panel1 from "../public/panel-1.png";
import panel2 from "../public/panel-2.png";
import rope from "../public/rope.png";


// next
import Image from "next/image";

// packages
import { FaArrowDownLong } from "react-icons/fa6";

export default function Home() {
  const defaultWindowSize = { width: null, height: null, ratio: null };
  const [initWindow, setInitWindow] = useState(defaultWindowSize);
  const [showModal, setShowModal] = useState(true);

  // Refs
  const beeImg = useRef(null);
  const bee2Img = useRef(null);
  const bee3Img = useRef(null);
  const buttonRef = useRef(null);
  const dynamicElement = useRef(null);
  const staticBoard1 = useRef(null);
  const staticLogos1 = useRef(null);
  const staticLogos2 = useRef(null);
  const staticLogos3 = useRef(null);
  const staticPanel1 = useRef(null);
  const staticPanel2 = useRef(null);


  // Functions
  const getWindowsSize = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height, ratio: width / height };
  }

  const moveBee = (direction, positionX, positionY) => {
    beeImg.current.style.position = "fixed";
    beeImg.current.style.top = `${positionY}px`;
    beeImg.current.style.left = `${positionX}px`;
    beeImg.current.style.transform = `scaleX(${direction})`;
    // beeImg.current.className = "fixed";
    // beeImg.current.className = `top-[${positionY}px]`;
    // beeImg.current.className = `left-[${positionX}px]`;
    // beeImg.current.className = `scale-x-[${direction}]`;
  }

  const moveElement = (element, direction, positionX, positionY) => {
    dynamicElement.current.src = element;
    dynamicElement.current.style.display = "block";
    dynamicElement.current.style.left = `${positionX}px`;
    dynamicElement.current.style.top = `${positionY}px`;
  }

  const resetElement = (element) => {
    element.current.style.display = "none";
  }

  const showElement = (element, positionX, positionY, source = undefined, width = undefined) => {
    if (source) element.current.src = source;
    if (width) element.current.style.width = `${width}px`;
    element.current.style.display = "block";
    element.current.style.left = `${positionX}px`;
    element.current.style.top = `${positionY}px`;
  }

  const animateElement = (element, animationName, duration, iterationCount) => {
    element.current.style.animationName = animationName;
    element.current.style.animationDuration = duration;
    element.current.style.animationIterationCount = iterationCount;
  }

  ///// UseEffect to handle scroll
  useEffect(() => {

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const beeTopPosition = 120
      const dynamicElementTopPosition = 190;
      const dynamicElementLeftPosition = 5;

      /////// FIRST WAY Left -> Right
      if (scrollY < windowWidth) {

        // RESET DYNAMIC LOGOS
        resetElement(dynamicElement);

        // Bee effects
        moveBee(1, scrollY, beeTopPosition);
      }

      /////// FIRST WAY BACK Right -> Left
      else if (scrollY >= windowWidth && scrollY < (windowWidth * 2) - 100) {

        // Reset static elements
        resetElement(staticLogos1);

        // Bee effects
        moveBee(-1, windowWidth - (scrollY - windowWidth), beeTopPosition);

        // Animated element effects
        // moveElement("/static/images/logos-x3-1.png", -1, windowWidth - (scrollY - windowWidth) + dynamicElementLeftPosition, dynamicElementTopPosition);
        moveElement(logosX3_1, -1, windowWidth - (scrollY - windowWidth) + dynamicElementLeftPosition, dynamicElementTopPosition);
      }

      /////// SECOND WAY Left -> Right
      else if (scrollY >= (windowWidth * 2) && scrollY < (windowWidth * 3)) {

        // Bee effects
        moveBee(1, scrollY - (windowWidth * 2), 120);

        // Static elements effects
        showElement(staticLogos1, 90, 220);

        // Animated element effects
        resetElement(dynamicElement)
      }

      /////// SECOND WAY BACK Right -> Left
      else if (scrollY >= (windowWidth * 3) && scrollY < (windowWidth * 4) - 100) {

        // Reset static elements
        resetElement(staticLogos2);
        resetElement(bee2Img);

        // Bee effects
        moveBee(-1, windowWidth - (scrollY - windowWidth * 3), 120);

        // Animated element effects
        // showElement(dynamicElement, windowWidth - (scrollY - windowWidth * 3) + dynamicElementLeftPosition, 220, "/static/images/logos-x3-2.png", 80);
        // moveElement("/static/images/logos-x3-2.png", -1, windowWidth - (scrollY - windowWidth * 3) + dynamicElementLeftPosition, dynamicElementTopPosition);
        showElement(dynamicElement, windowWidth - (scrollY - windowWidth * 3) + dynamicElementLeftPosition, 220, logosX3_2, 80);
        moveElement(logosX3_2, -1, windowWidth - (scrollY - windowWidth * 3) + dynamicElementLeftPosition, dynamicElementTopPosition);
      }

      /////// THIRD WAY Left -> Right
      else if (scrollY >= (windowWidth * 4) && scrollY < (windowWidth * 5) - 100) {

        // Bee effects
        moveBee(1, scrollY - (windowWidth * 4), beeTopPosition);

        // Static elements effects
        showElement(staticLogos2, 150, 215);
        showElement(bee2Img, 170, 50);

        // Animated element effects
        resetElement(dynamicElement)
      }

      /////// THIRD WAY BACK Right -> Left
      else if (scrollY >= (windowWidth * 5) && scrollY < (windowWidth * 6) - 100) {

        // Reset static elements
        resetElement(staticLogos3);
        resetElement(bee3Img);

        // Bee effects
        moveBee(-1, windowWidth - (scrollY - windowWidth * 5), 120);

        // Animated element effects
        // showElement(dynamicElement, windowWidth - (scrollY - windowWidth * 5) + dynamicElementLeftPosition, 220, "/static/images/logos-x3-3.png", 80);
        // moveElement("/static/images/logos-x3-3.png", -1, windowWidth - (scrollY - windowWidth * 5) + dynamicElementLeftPosition, dynamicElementTopPosition);
        showElement(dynamicElement, windowWidth - (scrollY - windowWidth * 5) + dynamicElementLeftPosition, 220, logosX3_3, 80);
        moveElement(logosX3_3, -1, windowWidth - (scrollY - windowWidth * 5) + dynamicElementLeftPosition, dynamicElementTopPosition);
      }

      /////// FOURTH WAY Left -> Right
      else if (scrollY >= (windowWidth * 6) && scrollY < (windowWidth * 7) - 100) {

        // Bee effects
        moveBee(1, scrollY - (windowWidth * 6), beeTopPosition);

        // Static elements effects
        showElement(staticLogos3, 120, 160);

        // Animated element effects
        resetElement(dynamicElement)
      }

      /////// FOURTH WAY BACK Right -> Left
      else if (scrollY >= (windowWidth * 7) && scrollY < (windowWidth * 8) - 100) {
        // Reset static elements
        resetElement(staticBoard1);
        resetElement(bee3Img);

        // Bee effects
        moveBee(-1, windowWidth - (scrollY - windowWidth * 7), 120);

        // Animated element effects
        // showElement(dynamicElement, windowWidth - (scrollY - windowWidth * 7), 220, "/static/images/board-skills-1.png", 200);
        // moveElement("/static/images/board-skills-1.png", -1, windowWidth - (scrollY - windowWidth * 7) - 50, dynamicElementTopPosition);
        showElement(dynamicElement, windowWidth - (scrollY - windowWidth * 7), 220, boardSkills1, 200);
        moveElement(boardSkills1, -1, windowWidth - (scrollY - windowWidth * 7) - 50, dynamicElementTopPosition);
      }

      /////// FIFTH WAY Left -> Right
      else if (scrollY >= (windowWidth * 8) && scrollY < (windowWidth * 8) + (windowWidth / 3)) {
        // Bee effects
        moveBee(1, scrollY - (windowWidth * 8), windowHeight - 180);

        // Static elements effects
        showElement(staticBoard1, 50, 350);
        showElement(bee3Img, 0, 210);

        // Animated element effects
        resetElement(dynamicElement)
      }

      /////// FIFTH WAY BACK Right -> Left
      else if (scrollY >= (windowWidth * 8) + (windowWidth / 3) && scrollY < (windowWidth * 8) + (windowWidth / 2) + 50) {

        // Reset static elements
        resetElement(staticPanel1);

        // Bee effects
        moveBee(1, scrollY - (windowWidth * 8), windowHeight - 180);

        // Static elements effects
        showElement(staticBoard1, 50, 350);
        showElement(bee3Img, 0, 210);

        // Animated element effects
        resetElement(dynamicElement)
      }

      /////// SIXTH WAY PART 1 Left -> Right
      else if (scrollY >= (windowWidth * 8) + (windowWidth / 3) && scrollY < (windowWidth * 8) + ((windowWidth / 3) * 2) + 50) {
        // Reset static elements
        resetElement(staticPanel2);
        resetElement(buttonRef);

        // Bee effects
        moveBee(1, scrollY - (windowWidth * 8), windowHeight - 180);
        animateElement(beeImg, "none", "0s", "none");

        // Static elements effects
        showElement(staticPanel1, (windowWidth / 8) + 40, windowHeight <= 400 ? windowHeight - 50 : windowHeight - 150);
      }

      /////// SIXTH WAY PART 2 Left -> Right
      else if (scrollY >= (windowWidth * 8) + ((windowWidth / 3) * 2) + 50 && scrollY < (windowWidth * 9)) {
        // Bee effects
        animateElement(beeImg, "beeAnimation", "4s", "infinite");
        beeImg.current.style.transform = `scaleX(-1)`;

        // Static elements effects
        showElement(staticPanel2, windowWidth <= 400 ? (windowWidth / 10) + 180 : windowWidth <= 850 ? (windowWidth / 5) + 180 : (windowWidth / 4) + 150, windowHeight <= 400 ? windowHeight - 80 : windowHeight - 180);
        showElement(buttonRef, ((windowWidth / 3) * 2) > 600 ? windowWidth / 2 : (windowWidth / 3) * 2, windowHeight / 3);
      }
    }

    // Init window size
    setInitWindow(getWindowsSize());
    window.scrollTo(0, 0);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="relative bg-grass w-full h-[15000px] overflow-hidden">
      {showModal && <div className="fixed z-[100] flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <div className="flex flex-col items-center justify-center p-4 mx-4 bg-white rounded-lg">
          <h2 className="text-3xl font-bold text-center text-black mb-4">Projet micro porfolio</h2>
          <p className="text-lg text-black">Il vous faudra défiler vers le bas pour faire apparaître les éléments au fur et à mesure.</p>
          <button onClick={() => setShowModal(false)} className="px-4 py-2 mt-4 bg-orange-500 text-white font-bold rounded-lg">D'accord</button>
        </div>
      </div>}
      {(initWindow.width && initWindow.height) && <>
        {/* <div className="flex items-center justify-center relative w-full" style={{ backgroundImage: "url(/static/images/bg-1-sm-2.jpg)", backgroundSize: "cover", backgroundAttachment: "fixed", height: "100%" }}> */}
        <div className="flex items-center justify-center relative w-full" style={{ backgroundImage: `url(/bg-1-sm-2.jpg)`, backgroundSize: "cover", backgroundAttachment: "fixed", height: "100%" }}>

          {/**** Texts */}
          <h1 className="title__custom" style={{ top: `${initWindow.height / 2}px`, zIndex: 70 }}>
            <span className="uppercase">Sylvain Langot</span>
            <span className="subtitle__custom">Jeune abeille cherchant une ruche</span>
            Développeur FullStack
          </h1>
          <h2 className="title__custom" style={{ top: `${(initWindow.height * initWindow.ratio * 2)}px` }}>
            <span className="subtitle__custom">Butinant avec </span>
            React / Next.js / TypeScript
          </h2>
          <h2 className="title__custom" style={{ top: `${(initWindow.height * initWindow.ratio * 4)}px` }}>
            <span className="subtitle__custom">Pollinisant avec </span>
            Node.js / MySQL / TailwindCSS
          </h2>
          <h2 className="title__custom" style={{ top: `${(initWindow.height * initWindow.ratio * 6)}px` }}>
            <span className="subtitle__custom">Se nourrissant avec </span>
            Git / GitHub / BitBucket
          </h2>
          <h2 className="title__custom" style={{ top: `${(initWindow.height * initWindow.ratio * 8)}px` }}>
            <span className="subtitle__custom">Récoltant avec </span>
            Méthode Agile / Clean Code
          </h2>


          {/**** Hive */}
          <div className="relative">

            <Image
              className="fixed z-20 top-10 -left-[60px] scale-x-[-1]"
              // src="/static/images/hive-2-abbeal.png"
              src={hiveAbbeal}
              alt="hive with logo"
              width={300}
              height={300}
            />

            <Image
              className="fixed z-40 top-10 -left-[60px] scale-x-[-1]"
              // src="/static/images/hive-layout-2.png"
              src={hiveLayout}
              alt="hive"
              width={300}
              height={300}
            />

            <Image className="fixed z-10 left-[100px] top-[250px]"
              width={100}
              height={100}
              // src="/static/images/rope.png"
              src={rope}
              alt="rope"
            />

            <Image className="fixed z-40 left-[170px] top-[50px] scale-x-[-1] hidden"
              ref={bee2Img}
              width={100}
              height={100}
              // src="/static/images/bee-2.png"
              src={bee2}
              alt="bee 2"
            />

            <Image className="fixed z-40 left-[0px] top-[220px] hidden"
              ref={bee3Img}
              width={100}
              height={100}
              // src="/static/images/bee-3.png"
              src={bee3}
              alt="bee 3"
            />

          </div>

          {/**** Dynmaic Bee */}
          <Image className="fixed z-[60] top-[130px] object-contain"
            ref={beeImg}
            width={100}
            height={100}
            // src="/static/images/bee-1-sm-2.png"
            src={bee1}
            alt="bee"
            id="bee-img"
          />

          {/**** Animated Element */}
          <Image className="fixed z-50 hidden"
            ref={dynamicElement}
            src=""
            width={80}
            height={80}
            alt="tech-logo"
          />

          {/**** Static logos in the hive */}
          {/* First x3 static logos ; React, Next.js, TypeScript */}
          <Image className="fixed hidden z-30"
            ref={staticLogos1}
            // src="/static/images/logos-x3-1.png"
            src={logosX3_1}
            width={60}
            height={60}
            alt="react next ts logo"
          />

          {/* Second x3 static logos ; Node.js, MySQL, TailWind */}
          <Image className="fixed hidden z-[29]"
            ref={staticLogos2}
            // src="/static/images/logos-x3-2.png"
            src={logosX3_2}
            width={60}
            height={60}
            alt="node tailwind mysql logo"
          />

          {/* Third x3 static logos ; Git, GitHub, BitBucket */}
          <Image className="fixed hidden z-[28]"
            ref={staticLogos3}
            // src="/static/images/logos-x3-3.png"
            src={logosX3_3}
            width={60}
            height={60}
            alt="git github bitbucket logo"
          />

          {/* Wood suspended board with x3 static skills ; Agile method, clean code, Jira and Notion */}
          <Image className="fixed hidden z-[40]"
            ref={staticBoard1}
            // src='/static/images/board-skills-1.png'
            src={boardSkills1}
            width={200}
            height={0}
            alt='Agile method, clean code, Jira and Notion'
          />

          {/* First panel with x3 static skills ;  "Adaptation, bienveillance, volontaire" */}
          <Image className="fixed hidden z-40"
            style={{ width: `${(initWindow.width / 4) >= 200 ? 200 : initWindow.width / 4}px` }}
            ref={staticPanel1}
            // src='/static/images/panel-1.png'
            src={panel1}
            width={200}
            height={0}
            alt='Adaptation, bienveillance, volontaire'
          />

          {/* Second panel with x3 static skills ;  "Motivé, joie de vivre, curieux" */}
          <Image className="fixed hidden z-40"
            style={{ width: `${(initWindow.width / 4) >= 200 ? 200 : initWindow.width / 4}px` }}
            ref={staticPanel2}
            // src='/static/images/panel-2.png'
            src={panel2}
            width={200}
            height={0}
            alt='Motivé, joie de vivre, curieux'
          />

          {/* Contact button */}
          <div className="flex items-center justify-center w-full h-full">
            <a href='mailto:langot.sylvain.contact@gmail.com'>
              {/* <button className="fixed hidden z-50 px-3 bg-white font-bold text-orange-500 bg-transparent w-[120px] h-[120px] rounded-lg" style={{ backgroundColor: 'transparent', backgroundImage: 'url(/static/images/hive-btn-1-min.png)', backgroundSize: 'cover', animation: 'beehiveAnimation 5s linear infinite' }} ref={buttonRef}>Me contacter</button> */}
              <button className="fixed hidden z-50 px-3 bg-white font-bold text-orange-500 bg-transparent w-[120px] h-[120px] rounded-lg" style={{ backgroundColor: 'transparent', backgroundImage: `url(/hive-btn-1-min.png)`, backgroundSize: 'cover', animation: 'beehiveAnimation 5s linear infinite' }} ref={buttonRef}>Me contacter</button>
            </a>
          </div>

          {/**** Grass */}
          <div
            className="fixed z-30 bottom-0 w-full h-52 bg-cover bg-repeat-x"
            // style={{ backgroundImage: `url('/static/images/grass-flower-1.png')` }}
            style={{ backgroundImage: `url(/grass-flower-1.png)` }}
          />

          {/**** Scroll arrow */}
          <div className="flex flex-col items-center gap-4 fixed z-40 bottom-4 right-4">
            <p className="-rotate-90 text-white drop-shadow-3xl">scroll</p>
            <FaArrowDownLong className="z-50 text-white drop-shadow-3xl custom__arrow" width={100} height={100} />
          </div>
        </div>
      </>}
    </main>
  );
}
