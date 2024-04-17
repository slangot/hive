"use client"
import React, { useEffect, useRef, useState } from "react";

// next
import Image from "next/image";

// packages
import { FaArrowDownLong } from "react-icons/fa6";

export default function Home() {
  const [initWindowWidth, setInitWindowWidth] = useState(0);
  const [initWindowHeight, setInitWindowHeight] = useState(0);

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


  return (
    <main className="bg-grass w-full h-[10000px] overflow-hidden">
      <div className="relative w-full h-[auto] bg-grass">
        {(initWindowWidth > 0 && initWindowHeight > 0) && <>

          {/**** Texts */}
          <h1 className={`absolute z-50 top-${initWindowHeight}px title__custom`}>Sylvain Langot</h1>
          <h1 className={`absolute z-50 top-[${(window.innerHeight * 2) + 200}px] title__custom`}>Développeur FullStack</h1>
          <h1 className="absolute z-50 top-[2300px] title__custom">React / Next.js / TypeScript</h1>
          <h1 className="absolute z-50 top-[3300px] title__custom">Node.js / MySQL / TailwindCSS</h1>
          <h1 className="absolute z-50 top-[4300px] title__custom">Git / GitHub / BitBucket</h1>
          <h1 className="absolute z-50 top-[5300px] title__custom">Méthode Agile / Clean Code</h1>


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
            src='/logos-x3-1.png'
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
          <Image className="fixed hidden z-[40]"
            ref={staticPanel1}
            src='/panel-1.png'
            width={200}
            height={0}
            alt='Adaptation, bienveillance, volontaire'
          />

          {/* Second panel with x3 static skills ;  "Motivé, joie de vivre, curieux" */}
          <Image className="fixed hidden z-[40]"
            ref={staticPanel2}
            src='/panel-2.png'
            width={200}
            height={0}
            alt='Motivé, joie de vivre, curieux'
          />

          {/* Contact button */}
          <div className="fixed hidden z-50 top-10 right-10" ref={buttonRef}>
            <button className="bg-white text-black px-4 py-2 rounded-lg">Contact</button>
          </div>

          {/**** BG with treee */}
          <Image
            src='/bg-1.jpg'
            alt='hill'
            className="fixed top-0 w-auto bg-cover aspect-auto blur-[1px] brightness-75"
            width={0}
            height={0}
            sizes="100vw"
          />

          {/**** Grass */}
          <div
            className="fixed z-30 bottom-0 w-full h-52 bg-cover bg-repeat-x"
            style={{ backgroundImage: `url('/grass-flower-1.png')` }}
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
