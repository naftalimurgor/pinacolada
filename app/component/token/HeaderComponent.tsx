import React from 'react';
import { HeaderContent, HeaderSmall } from '@/component/Header';

interface HeaderProps {
  showSmallHeader: boolean;
}

const HeaderComponent: React.FC<HeaderProps> = ({ showSmallHeader }) => {
  return (
    <>
      {showSmallHeader ? (
        <HeaderSmall />
      ) : (
        <div
          className="relative p-8 rounded-t-3xl"
          style={{
            width: '99%',
            height: '302px',
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
          <div className="mt-8 flex justify-between items-center text-white">
            <div className="text-left">
              <span className="block text-5xl font-extrabold">TOKENS</span>
              <span className="block text-xl text-lime-400 font-bold text-left">MENU</span>
            </div>
            <div className="max-w-3xl mx-auto flex justify-between" style={{ marginLeft: '424px' }}>
              <div className="text-left">
                <p className="text-base">
                  Browse through the menu with all the tokens that we currently support.
                </p>
              </div>
              <div className="text-right">
                <p className="text-base">
                  Let the bartender know if you want to know our favourites.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderComponent;
