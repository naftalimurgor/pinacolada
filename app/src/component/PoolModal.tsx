import React from 'react';
import XIcon from './Icons/XIcon';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="relative z-10 w-1/3 bg-white h-full shadow-lg p-6" style={{ minWidth: '320px' }}>
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    <XIcon />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
