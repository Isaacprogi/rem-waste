import {
    FiMapPin,
    FiTrash2,
    FiTruck,
    FiShield,
    FiCalendar,
    FiCreditCard
  } from 'react-icons/fi';
  import React from 'react';
import useDeviceWidth from '../../hooks/useDeviceWidth';
  
  const navbarItems = [
    { icon: FiMapPin, label: 'Postcode', disabled: false },
    { icon: FiTrash2, label: 'Waste Type', disabled: false },
    { icon: FiTruck, label: 'Select Skip', disabled: false },
    { icon: FiShield, label: 'Permit Check', disabled: true },
    { icon: FiCalendar, label: 'Choose Date', disabled: true },
    { icon: FiCreditCard, label: 'Payment', disabled: true },
  ];
  
  const Navbar = () => {
    const width = useDeviceWidth(); 
  
    const scrollbarClass = width <= 768 ? 'scrollbar-hide' : '';
  
    return (
      <div className={`flex justify-start xl:justify-center mb-8 overflow-x-auto ${scrollbarClass}`}>
        <div className="flex items-center space-x-4 min-w-max px-4">
          {navbarItems.map((item, index) => (
            <React.Fragment key={index}>
              <button
                disabled={item.disabled}
                className={`flex items-center whitespace-nowrap transition-colors ${item.disabled ? 'text-white/60 cursor-not-allowed opacity-50' : 'text-[#0037C1] cursor-pointer hover:text-[#0037C1]'}`}
              >
                <item.icon className="w-6 h-6" />
                <span className="ml-2 text-white">{item.label}</span>
              </button>
  
              {index < navbarItems.length - 1 && (
                <div className="w-16 h-px bg-[#2A2A2A]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };
  
  export default Navbar;
  