"use client"
import { YMaps, Map, ObjectManager, FullscreenControl, RouteEditor, GeolocationControl, SearchControl } from "@pbe/react-yandex-maps";
import React, { useEffect, useState } from 'react';

const mapState = {
    center: [45.035470, 38.975313], // Краснодар
    zoom: 7,
};

const cities = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            id: 1,
            geometry: { type: "Point", coordinates: [45.035470, 38.975313] }, // Краснодар
            properties: { balloonContent: "Информация о Краснодаре" },
        },
        {
            type: "Feature",
            id: 2,
            geometry: { type: "Point", coordinates: [43.585525, 39.723062] }, // Сочи
            properties: { balloonContent: "Информация о Сочи" },
        },
        // Добавьте другие города по аналогии
    ],
};

const YandexMapPage = () => {
    const [isMapRendered, setIsMapRendered] = useState(false);

    useEffect(() => {
        setIsMapRendered(true);
    }, []);

    return (
        <YMaps query={{ apikey: process.env.NEXT_PUBLIC_YANDEX_MAP_API_KEY, load: 'package.full' }}>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="border-red-500 border-2 w-full md:w-3/4 h-3/4">
                    {isMapRendered && (
                        <Map state={mapState} width="100%" height="100%">
                            <ObjectManager
                                options={{
                                    clusterize: true,
                                    gridSize: 32,
                                }}
                                objects={{
                                    openBalloonOnClick: true,
                                    preset: 'islands#greenDotIcon',
                                }}
                                clusters={{
                                    preset: 'islands#redClusterIcons',
                                }}
                                features={cities}
                                modules={[
                                    "objectManager.addon.objectsBalloon",
                                    "objectManager.addon.objectsHint",
                                ]}
                            />
                            <RouteEditor />
                            <GeolocationControl options={{ float: 'left' }} />
                            <FullscreenControl />
                            <SearchControl options={{
                                provider: 'yandex#search',
                                apiKey: '3f011113-d0da-4edc-abb8-c07f6537deef',
                            }} />
                        </Map>
                    )}
                </div>
            </div>
        </YMaps>
    );
};

export default YandexMapPage;
