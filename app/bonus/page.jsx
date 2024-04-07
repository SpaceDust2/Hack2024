"use client";
import React, { useState } from "react";

const Bonus = () => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch("http://192.168.253.61:8000");
            if (!response.ok) {
                throw new Error("Сетевой ответ был не ok.");
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error("Ошибка при получении данных:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
                onClick={fetchData}
            >
                Получить данные
            </button>
            {data && (
                <div className="mt-4 p-4 w-full max-w-xs bg-white rounded shadow">
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default Bonus;
