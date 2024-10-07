import React from 'react';
import IslandOne from './component/Icons/Archipelago/islandOne';
import IslandTwo from './component/Icons/Archipelago/islandTwo';
import IslandThree from './component/Icons/Archipelago/islandThree';
import IslandFour from './component/Icons/Archipelago/islandFour';
import IslandFive from './component/Icons/Archipelago/islandFive';
import IslandSix from './component/Icons/Archipelago/islandSix';
import IslandSeven from './component/Icons/Archipelago/islandSeven';
import IslandEight from './component/Icons/Archipelago/islandEight';

interface ArchipelagoMapProps {
    onIslandHover: (islandName: string) => void;
    onIslandLeave: () => void;
}

const ArchipelagoMap: React.FC<ArchipelagoMapProps> = ({ onIslandHover, onIslandLeave }) => (
    <div 
  
    >
        {/* Position each island absolutely based on the map's layout */}
        <div 
            style={{}} // Adjust positions accordingly
            onMouseEnter={() => onIslandHover('Daiquiri Island,\nA Liquid Staking destination coming soon.')}
            onMouseLeave={onIslandLeave}
        >
            <IslandOne className="cursor-pointer" />
        </div>
        <div 
            style={{  }} // Adjust positions accordingly
            onMouseEnter={() => onIslandHover('Mojito Bay')}
            onMouseLeave={onIslandLeave}
        >
            <IslandTwo />
        </div>
        <div 
            style={{  }} // Adjust positions accordingly
            onMouseEnter={() => onIslandHover('Pina Colada Island')}
            onMouseLeave={onIslandLeave}
        >
            <IslandThree />
        </div>
        <div 
            style={{ }} // Adjust positions accordingly
            onMouseEnter={() => onIslandHover('Rum Island')}
            onMouseLeave={onIslandLeave}
        >
            <IslandFour className="cursor-pointer" />
        </div>
        <div 
            style={{ position: 'absolute', top: '45%', left: '15%' }} // Adjust positions accordingly
            onMouseEnter={() => onIslandHover('Tequila Shores')}
            onMouseLeave={onIslandLeave}
        >
            <IslandFive  />
        </div>
        <div 
            style={{  }} // Adjust positions accordingly
            onMouseEnter={() => onIslandHover('Whiskey Isle')}
            onMouseLeave={onIslandLeave}
        >
            <IslandSix/>
        </div>
        <div 
            style={{  }} // Adjust positions accordingly
            onMouseEnter={() => onIslandHover('Vodka Valley')}
            onMouseLeave={onIslandLeave}
        >
            <IslandSeven />
        </div>
        <div 
            style={{ }} // Adjust positions accordingly
            onMouseEnter={() => onIslandHover('Gin Grove')}
            onMouseLeave={onIslandLeave}
        >
            <IslandEight />
        </div>
    </div>
);

export default ArchipelagoMap;
