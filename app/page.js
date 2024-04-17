"use client"
import React, { useEffect, useRef, useState } from "react";

// next
import Image from "next/image";

// packages
import { FaArrowDownLong } from "react-icons/fa6";

export default function Home() {
  const defaultWindowSize = { width: null, height: null, ratio: null };
  const [initWindow, setInitWindow] = useState(defaultWindowSize);

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

  const getWindowsSize = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height, ratio: width / height };
  }

  // Functions
  const moveBee = (direction, positionX, positionY) => {
    beeImg.current.style.position = "fixed";
    beeImg.current.style.top = `${positionY}px`;
    beeImg.current.style.left = `${positionX}px`;
    beeImg.current.style.transform = `scaleX(${direction})`;
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

  ///// USE EFFECT ON SCROLL
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

        // BEE EFFECTS
        moveBee(1, scrollY, beeTopPosition);
      }

      /////// FIRST WAY BACK Right -> Left
      else if (scrollY >= windowWidth && scrollY < (windowWidth * 2) - 100) {

        // RESET STATIC LOGOS
        resetElement(staticLogos1);

        // BEE EFFECTS
        moveBee(-1, windowWidth - (scrollY - windowWidth), beeTopPosition);

        // ANIMATED LOGO EFFECTS
        moveElement("/images/logos-x3-1.png", -1, windowWidth - (scrollY - windowWidth) + dynamicElementLeftPosition, dynamicElementTopPosition);
      }

      /////// SECOND WAY Left -> Right
      else if (scrollY >= (windowWidth * 2) && scrollY < (windowWidth * 3)) {

        // BEE EFFECTS
        moveBee(1, scrollY - (windowWidth * 2), 120);

        // STATIC LOGO EFFECTS
        showElement(staticLogos1, 100, 220);

        // ANIMATED LOGO EFFECTS
        resetElement(dynamicElement)
      }

      /////// SECOND WAY BACK Right -> Left
      else if (scrollY >= (windowWidth * 3) && scrollY < (windowWidth * 4) - 100) {

        // RESET STATIC LOGOS AND IMAGES
        resetElement(staticLogos2);
        resetElement(bee2Img);

        // BEE EFFECTS
        moveBee(-1, windowWidth - (scrollY - windowWidth * 3), 120);

        // ANIMATED LOGO EFFECTS
        showElement(dynamicElement, windowWidth - (scrollY - windowWidth * 3) + dynamicElementLeftPosition, 220, '/images/logos-x3-2.png', 80);
        moveElement("/images/logos-x3-2.png", -1, windowWidth - (scrollY - windowWidth * 3) + dynamicElementLeftPosition, dynamicElementTopPosition);
      }

      /////// THIRD WAY Left -> Right
      else if (scrollY >= (windowWidth * 4) && scrollY < (windowWidth * 5) - 100) {

        // BEE EFFECTS
        moveBee(1, scrollY - (windowWidth * 4), beeTopPosition);

        // STATIC LOGO EFFECTS
        showElement(staticLogos2, 160, 215);
        showElement(bee2Img, 170, 50);

        // ANIMATED LOGO EFFECTS
        resetElement(dynamicElement)
      }

      /////// THIRD WAY BACK Right -> Left
      else if (scrollY >= (windowWidth * 5) && scrollY < (windowWidth * 6) - 100) {

        // RESET STATIC LOGOS AND IMAGES
        resetElement(staticLogos3);
        resetElement(bee3Img);

        // BEE EFFECTS
        moveBee(-1, windowWidth - (scrollY - windowWidth * 5), 120);

        // ANIMATED LOGO EFFECTS
        showElement(dynamicElement, windowWidth - (scrollY - windowWidth * 5) + dynamicElementLeftPosition, 220, '/images/logos-x3-3.png', 80);
        moveElement("/images/logos-x3-3.png", -1, windowWidth - (scrollY - windowWidth * 5) + dynamicElementLeftPosition, dynamicElementTopPosition);
      }

      /////// FOURTH WAY Left -> Right
      else if (scrollY >= (windowWidth * 6) && scrollY < (windowWidth * 7) - 100) {

        // BEE EFFECTS
        moveBee(1, scrollY - (windowWidth * 6), beeTopPosition);

        // STATIC LOGO EFFECTS
        showElement(staticLogos3, 130, 180);

        // ANIMATED LOGO EFFECTS
        resetElement(dynamicElement)
      }

      /////// FOURTH WAY BACK Right -> Left
      else if (scrollY >= (windowWidth * 7) && scrollY < (windowWidth * 8) - 100) {
        // RESET STATIC LOGOS AND IMAGES
        resetElement(staticBoard1);
        resetElement(bee3Img);

        // BEE EFFECTS
        moveBee(-1, windowWidth - (scrollY - windowWidth * 7), 120);

        // ANIMATED LOGO EFFECTS
        showElement(dynamicElement, windowWidth - (scrollY - windowWidth * 7), 220, '/images/board-skills-1.png', 200);
        moveElement("/images/board-skills-1.png", -1, windowWidth - (scrollY - windowWidth * 7) - 50, dynamicElementTopPosition);
      }

      /////// FIFTH WAY Left -> Right
      else if (scrollY >= (windowWidth * 8) && scrollY < (windowWidth * 8) + (windowWidth / 3)) {
        // BEE EFFECTS
        moveBee(1, scrollY - (windowWidth * 8), windowHeight - 180);

        // STATIC LOGO EFFECTS
        showElement(staticBoard1, 50, 350);
        showElement(bee3Img, 0, 210);

        // ANIMATED LOGO EFFECTS
        resetElement(dynamicElement)
      }

      /////// FIFTH WAY BACK Right -> Left
      else if (scrollY >= (windowWidth * 8) + (windowWidth / 3) && scrollY < (windowWidth * 8) + (windowWidth / 2) + 50) {

        // RESET STATIC LOGOS AND IMAGES
        resetElement(staticPanel1);

        // BEE EFFECTS
        moveBee(1, scrollY - (windowWidth * 8), windowHeight - 180);

        // STATIC LOGO EFFECTS
        showElement(staticBoard1, 50, 350);
        showElement(bee3Img, 0, 210);

        // ANIMATED LOGO EFFECTS
        resetElement(dynamicElement)
      }

      /////// SIXTH WAY PART 1 Left -> Right
      else if (scrollY >= (windowWidth * 8) + (windowWidth / 3) && scrollY < (windowWidth * 8) + ((windowWidth / 3) * 2) + 50) {
        // RESET STATIC LOGOS AND IMAGES
        resetElement(staticPanel2);
        resetElement(buttonRef);

        // BEE EFFECTS
        moveBee(1, scrollY - (windowWidth * 8), windowHeight - 180);

        // STATIC LOGO EFFECTS
        showElement(staticPanel1, windowWidth / 10, windowHeight - 200);
      }

      /////// SIXTH WAY PART 2 Left -> Right
      else if (scrollY >= (windowWidth * 8) + ((windowWidth / 3) * 2) + 50 && scrollY < (windowWidth * 9)) {
        // BEE EFFECTS
        animateElement(beeImg, 'beeAnimation', '4s', 'infinite');
        beeImg.current.style.transform = `scaleX(-1)`;
        showElement(staticPanel2, (windowWidth <= 400 ? windowWidth / 10 : windowWidth / 5) + 100, windowHeight - 180);
        // CONTACT BUTTON
        showElement(buttonRef, windowWidth / 3, windowHeight / 3);
      }
    }

    // INIT WINDOW SIZE
    setInitWindow(getWindowsSize());
    window.scrollTo(0, 0);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="relative bg-grass w-full h-[15000px] overflow-hidden">
      <div className="flex items-center justify-center relative w-full h-full" style={{ backgroundImage: 'url(/images/bg-1-sm-2.jpg)', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        {(initWindow.width && initWindow.height) && <>

          {/**** Texts */}
          <h1 className="title__custom" style={{ top: `${initWindow.height / 2}px` }}>
            <span className="uppercase">Sylvain Langot</span><br />
            Développeur FullStack
          </h1>
          <h1 className="title__custom" style={{ top: `${(initWindow.height * initWindow.ratio * 2)}px` }}>React / Next.js / TypeScript</h1>
          <h1 className="title__custom" style={{ top: `${(initWindow.height * initWindow.ratio * 4)}px` }}>Node.js / MySQL / TailwindCSS</h1>
          <h1 className="title__custom" style={{ top: `${(initWindow.height * initWindow.ratio * 6)}px` }}>Git / GitHub / BitBucket</h1>
          <h1 className="title__custom" style={{ top: `${(initWindow.height * initWindow.ratio * 8)}px` }}>Méthode Agile / Clean Code</h1>


          {/**** Hive */}
          <div className="relative">
            <Image
              className="fixed z-20 top-10 -left-[60px] w-auto h-auto scale-x-[-1]"
              src='/hive-2-abbeal.png'
              alt='hive with logo'
              width={300}
              height={300}
            />
            <Image
              className="fixed z-40 top-10 -left-[60px] w-auto h-auto scale-x-[-1]"
              src='/hive-layout-1.png'
              alt='hive'
              width={300}
              height={300}
            />
            <Image className="fixed z-10 left-[100px] top-[250px] w-auto h-auto"
              width={100}
              height={100}
              src='/rope.png'
              alt='rope'
            />
            <Image className="fixed z-40 left-[170px] top-[50px] w-auto h-auto scale-x-[-1] hidden"
              ref={bee2Img}
              width={100}
              height={100}
              src='/bee-2.png'
              alt='bee 2'
            />
            <Image className="fixed z-40 left-[0px] top-[220px] w-auto h-auto hidden"
              ref={bee3Img}
              width={100}
              height={100}
              src='/bee-3.png'
              alt='bee 3'
            />
          </div>

          {/**** Dynmaic Bee */}
          <Image className="fixed z-[60] top-[130px] object-contain"
            ref={beeImg}
            width={100}
            height={100}
            src='/bee-1-sm-2.png'
            alt='bee'
            id='bee-img'
          />

          {/**** Animated Element */}
          <Image className="fixed z-50 hidden"
            ref={dynamicElement}
            src=''
            width={80}
            height={80}
            alt='tech-logo'
          />

          {/**** Static logos in the hive */}
          {/* First x3 static logos ; React, Next.js, TypeScript */}
          <Image className="fixed hidden z-30"
            ref={staticLogos1}
            src='/images/logos-x3-1.png'
            width={60}
            height={60}
            alt='react next ts logo'
          />

          {/* Second x3 static logos ; Node.js, MySQL, TailWind */}
          <Image className="fixed hidden z-[29]"
            ref={staticLogos2}
            src='/logos-x3-2.png'
            width={60}
            height={60}
            alt='node tailwind mysql logo'
          />

          {/* Third x3 static logos ; Git, GitHub, BitBucket */}
          <Image className="fixed hidden z-[28]"
            ref={staticLogos3}
            src='/logos-x3-3.png'
            width={60}
            height={60}
            alt='git github bitbucket logo'
          />

          {/* Wood suspended board with x3 static skills ; Agile method, clean code, Jira and Notion */}
          <Image className="fixed hidden z-[40]"
            ref={staticBoard1}
            src='/board-skills-1.png'
            width={200}
            height={0}
            alt='Agile method, clean code, Jira and Notion'
          />

          {/* First panel with x3 static skills ;  "Adaptation, bienveillance, volontaire" */}
          <Image className="fixed hidden z-40"
            style={{ width: `${(initWindow.width / 4) >= 200 ? 200 : initWindow.width / 4}px` }}
            ref={staticPanel1}
            src='/panel-1.png'
            width={200}
            height={0}
            alt='Adaptation, bienveillance, volontaire'
          />

          {/* Second panel with x3 static skills ;  "Motivé, joie de vivre, curieux" */}
          <Image className="fixed hidden z-40"
            style={{ width: `${(initWindow.width / 4) >= 200 ? 200 : initWindow.width / 4}px` }}
            ref={staticPanel2}
            src='/panel-2.png'
            width={200}
            height={0}
            alt='Motivé, joie de vivre, curieux'
          />

          {/* Contact button */}
          <button className="fixed hidden z-50 top-10 right-10 bg-white text-black px-4 py-2 rounded-lg" ref={buttonRef}>Contact</button>

          {/* *** BG with treee
          <Image
            src='/bg-1.jpg'
            alt='hill'
            className="fixed top-0 w-auto object-fill object-center h-full blur-[1px] brightness-75"
            width={0}
            height={0}
            sizes="100vw"
          /> */}

          {/**** Grass */}
          <div
            className="fixed z-30 bottom-0 w-full h-52 bg-cover bg-repeat-x"
            style={{ backgroundImage: `url('/images/grass-flower-1.png')` }}
          />

          {/**** Scroll arrow */}
          <div className="flex flex-col items-center gap-4 fixed z-40 bottom-4 right-4">
            <p className="-rotate-90 text-white drop-shadow-3xl">scroll</p>
            <FaArrowDownLong className="z-50 text-white drop-shadow-3xl custom__arrow" width={100} height={100} />
          </div>
        </>}
      </div>
    </main>
  );
}
