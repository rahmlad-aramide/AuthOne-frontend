'use client'
import React, { useState, useEffect } from 'react';
import { Kite, Shield, Feather } from '../svg';
import { sfPro } from '@/app/fonts';

const texts = ["Quick", "Secure", "Smooth"];
const colors = ["bg-[#DE4EAC40] text-[#DE4EAC]", "bg-[#5BBE8A40] text-[#5BBE8A]", "bg-[#F4535340] text-[#F45353]"];
const icons = [<Kite className="mr-1 md:mr-3 h-8 md:h-full" key={'1'} />, <Shield className="mr-1 md:mr-2 h-8 md:h-full" key={'2'} />, <Feather className="mr-1 md:mr-3 h-8 md:h-full" key={'3'} />]

const AnimatedText: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsAnimating(false);
      }, 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative w-fit h-fit min-h-20 px-3 rounded-[50px] inline-flex items-center leading-tight mt-3 sm:mt-5 ml-3 overflow-hidden ${colors[currentTextIndex]} transition-all duration-1000 ${sfPro.className}`}>
        <span className={`${isAnimating ? 'animate-slide-out' : 'animate-slide-in'} rounded-[50px] inline-flex items-center leading-tight mx-3`}> {icons[currentTextIndex]} {texts[currentTextIndex]}</span>
    </span>
  );
};

export default AnimatedText;
