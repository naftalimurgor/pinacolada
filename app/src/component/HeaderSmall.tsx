'use client';

import React from 'react';
import HeaderContent from './HeaderContent';

const HeaderSmall: React.FC = () => {
    return (
        <div
        className="relative p-8 rounded-t-3xl"
        style={{
          width: '2050px',
          height: '120px',
          top: '8px',
          left: '8px',
          gap: '14px',
          borderRadius: '16px',
          backgroundImage: 'url(/sky.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <HeaderContent />
      </div>
    );
};

export default HeaderSmall;
