"use client"
import React from "react";
import { FaHome, FaMapMarkedAlt, FaUsers, FaCampground, FaSun, FaUtensils } from "react-icons/fa";
import Link from "next/link";

const SearchComp = () => {
    return (
        <div className="bg-gray-800 text-white flex justify-between p-4">
            <div className="flex space-x-4 items-center">
                {/* Иконки и текст */}
                <Link href="/places">
                    <div className="hover:text-gray-300 flex items-center">
                        <FaHome className="h-5 w-5 mr-1" />
                        Места и события
                    </div>
                </Link>
                <Link href="/routes">
                    <div className="hover:text-gray-300 flex items-center">
                        <FaMapMarkedAlt className="h-5 w-5 mr-1" />
                        Готовые маршруты
                    </div>
                </Link>
                <Link href="/housing">
                    <div className="hover:text-gray-300 flex items-center">
                        <FaUsers className="h-5 w-5 mr-1" />
                        Жилье
                    </div>
                </Link>
                <Link href="/camping">
                    <div className="hover:text-gray-300 flex items-center">
                        <FaCampground className="h-5 w-5 mr-1" />
                        Кемпинг
                    </div>
                </Link>
                <Link href="/campsite">
                    <div className="hover:text-gray-300 flex items-center">
                        <FaSun className="h-5 w-5 mr-1" />
                        Кемпстойка
                    </div>
                </Link>
                <Link href="/food">
                    <div className="hover:text-gray-300 flex items-center">
                        <FaUtensils className="h-5 w-5 mr-1" />
                        Еда
                    </div>
                </Link>
            </div>
            <div className="flex items-center">
                {/* Поисковая строка */}
                <input
                    type="text"
                    placeholder="Найти место или событие"
                    className="rounded-l px-4 py-2 w-96"
                />
                <button className="bg-orange-500 text-white rounded-r px-4 py-2 hover:bg-orange-600">
                    Найти
                </button>
            </div>
        </div>
    );
};

export default SearchComp;
