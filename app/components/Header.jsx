"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Компонент для выбора языка
const LanguageSelector = ({ setLanguage }) => {
  const languages = [
    { code: 'en', label: 'English', icon: 'USA.png' },
    { code: 'ru', label: 'Russian', icon: 'Language.png' },
    { code: 'ch', label: 'China', icon: 'China.jpg' }
    // Добавьте другие языки и их иконки здесь
  ];

  return (
    <div className="absolute mt-16 right-0 bg-white shadow-lg rounded-md p-2">
      {languages.map((lang) => (
        <div
          key={lang.code}
          className="flex items-center cursor-pointer p-2 hover:bg-gray-100"
          onClick={() => setLanguage(lang.icon)}
        >
          <Image
            src={`/${lang.icon}`}
            width={20}
            height={20}
            alt={`Flag of ${lang.label}`}
          />
          <span className="ml-2">{lang.label}</span>
        </div>
      ))}
    </div>
  );
};

// Основной компонент Header
const Header = () => {
  const [language, setLanguage] = useState("Language.png");
  const [showLanguages, setShowLanguages] = useState(false);

  return (
    <div className="flex w-screen h-[72px] justify-between px-[250px] relative">
      {/* MENU CONTAINER */}
      <div className="flex flex-row justify-between items-center gap-4">
        {/* Stick Image */}
        <div className="">
          <Image
            src="/Stick.png"
            width={2}
            height={28}
            alt="Stick"
          />
        </div>
        {/* Burger Image */}
        <div className="">
          <Image
            src="/Burger.png"
            width={20}
            height={14}
            alt="Burger menu"
          />
        </div>
        {/* Menu Text */}
        <div className="">Меню</div>
      </div>
      {/* IMAGES CONTAINER */}
      <div className="flex flex-row justify-between items-center gap-7">
        {/* Favorite Icon */}
        <Link href="/favorites">
          
            <Image
              src="/Favorite.png"
              width={20}
              height={20}
              alt="Favorite list"
            />
        </Link>
        {/* Profile Icon */}
        <Link href="/profile">
          
            <Image
              src="/profile.png"
              width={20}
              height={20}
              alt="Profile"
            />
         
        </Link>
        {/* Language Icon */}
        <div onClick={() => setShowLanguages(!showLanguages)}>
          <Image
            src={`/${language}`}
            width={20}
            height={20}
            alt="Language selection"
          />
        </div>
        {/* Language Selector Component */}
        {showLanguages && <LanguageSelector setLanguage={setLanguage} />}
      </div>
    </div>
  );
};

export default Header;
