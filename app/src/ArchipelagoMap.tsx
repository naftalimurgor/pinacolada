import React from 'react';
import { IslandOne, IslandTwo, IslandThree, IslandFour, IslandFive, IslandSix, IslandSeven, IslandEight } from '@/component/Icons/Archipelago';


interface ArchipelagoMapProps {
    onIslandHover: (islandName: string) => void;
    onIslandLeave: () => void;
}

const ArchipelagoMap: React.FC<ArchipelagoMapProps> = ({ onIslandHover, onIslandLeave }) => (
    <div className="relative w-full h-full">
        {/* Each island positioned precisely as per design */}
        <div
            className="absolute cursor-pointer"
            style={{
                top: '90px',
                left: '150px'
            }}
            onMouseEnter={() => onIslandHover('Daiquiri Island, A Liquid Staking destination coming soon.')}
            onMouseLeave={onIslandLeave}
        >
            <IslandOne onHover={function (): void {
                throw new Error('Function not implemented.');
            }} onLeave={function (): void {
                throw new Error('Function not implemented.');
            }} />
        </div>

        <div
            className="absolute cursor-pointer"
            style={{
                width: '227.28px',
                height: '234.62px',
                top: '310px',
                left: '260px'
            }}
            onMouseEnter={() => onIslandHover('Mojito Bay')}
            onMouseLeave={onIslandLeave}
        >
            <IslandTwo onHover={function (): void {
                throw new Error('Function not implemented.');
            }} onLeave={function (): void {
                throw new Error('Function not implemented.');
            }} />
        </div>

        <div
            className="absolute cursor-pointer"
            style={{
                width: '150px',
                height: '190px',
                top: '280px',
                left: '45px'
            }}
            onMouseEnter={() => onIslandHover('Pina Colada Island')}
            onMouseLeave={onIslandLeave}
        >
            <IslandThree onHover={function (): void {
                throw new Error('Function not implemented.');
            }} onLeave={function (): void {
                throw new Error('Function not implemented.');
            }} />
        </div>
        <div
            className="absolute cursor-pointer"
            style={{
                width: '180px',
                height: '180px',
                top: '30px',
                left: '720px'
            }}
            onMouseEnter={() => onIslandHover('Rum Island')}
            onMouseLeave={onIslandLeave}
        >
            <IslandFour onHover={function (): void {
                throw new Error('Function not implemented.');
            }} onLeave={function (): void {
                throw new Error('Function not implemented.');
            }} />
        </div>

        <div
            className="absolute cursor-pointer"
            style={{
                width: '140px',
                height: '140px',
                top: '-30px',
                left: '510px'
            }}
            onMouseEnter={() => onIslandHover('Tequila Shores')}
            onMouseLeave={onIslandLeave}
        >
            <IslandFive onHover={function (): void {
                throw new Error('Function not implemented.');
            }} onLeave={function (): void {
                throw new Error('Function not implemented.');
            }} />
        </div>

        <div
            className="absolute cursor-pointer"
            style={{
                width: '160px',
                height: '160px',
                top: '120px',
                left: '550px'
            }}
            onMouseEnter={() => onIslandHover('Whiskey Isle')}
            onMouseLeave={onIslandLeave}
        >
            <IslandSix onHover={function (): void {
                throw new Error('Function not implemented.');
            }} onLeave={function (): void {
                throw new Error('Function not implemented.');
            }} />
        </div>

        <div
            className="absolute cursor-pointer"
            style={{
                width: '140px',
                height: '140px',
                top: '-25px',
                left: '400px'
            }}
            onMouseEnter={() => onIslandHover('Vodka Valley')}
            onMouseLeave={onIslandLeave}
        >
            <IslandSeven onHover={function (): void {
                throw new Error('Function not implemented.');
            }} onLeave={function (): void {
                throw new Error('Function not implemented.');
            }} />
        </div>

        <div
            className="absolute cursor-pointer"
            style={{
                width: '130px',
                height: '130px',
                top: '100px',
                left: '360px'
            }}
            onMouseEnter={() => onIslandHover('Gin Grove')}
            onMouseLeave={onIslandLeave}
        >
            <IslandEight onHover={function (): void {
                throw new Error('Function not implemented.');
            }} onLeave={function (): void {
                throw new Error('Function not implemented.');
            }} />
        </div>
    </div>
);

export default ArchipelagoMap;
