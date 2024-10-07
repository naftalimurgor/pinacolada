// archipelagoMap.tsx
import React from 'react';
import IslandOne from './component/Icons/Archipelago/islandOne';
// import IslandTwo from './component/Icons/Archipelago/islandTwo';
// import IslandThree from './component/Icons/Archipelago/islandThree';
// import IslandFour from './component/Icons/Archipelago/islandFour';
// import IslandFive from './component/Icons/Archipelago/islandFive';
// import IslandSix from './component/Icons/Archipelago/islandSix';
// import IslandSeven from './component/Icons/Archipelago/islandSeven';
// import IslandEight from './component/Icons/Archipelago/islandEight';

interface ArchipelagoMapProps {
    onIslandHover: (islandName: string) => void;
    onIslandLeave: () => void;
}

const ArchipelagoMap: React.FC<ArchipelagoMapProps> = ({ onIslandHover, onIslandLeave }) => (
    <div>
        <IslandOne
            onHover={() => onIslandHover('Daiquiri Island,\nA Liquid Staking destination coming soon.')}
            onLeave={onIslandLeave}
        />
        {/* <IslandTwo onHover={() => onIslandHover('Mojito Bay')} onLeave={onIslandLeave} />
        <IslandThree onHover={() => onIslandHover('Pina Colada Island')} onLeave={onIslandLeave} />
        <IslandFour onHover={() => onIslandHover('Rum Island')} onLeave={onIslandLeave} />
        <IslandFive onHover={() => onIslandHover('Tequila Shores')} onLeave={onIslandLeave} />
        <IslandSix onHover={() => onIslandHover('Whiskey Isle')} onLeave={onIslandLeave} />
        <IslandSeven onHover={() => onIslandHover('Vodka Valley')} onLeave={onIslandLeave} />
        <IslandEight onHover={() => onIslandHover('Gin Grove')} onLeave={onIslandLeave} /> */}
    </div>
);

export default ArchipelagoMap;
