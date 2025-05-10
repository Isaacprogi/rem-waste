import React from 'react';
import { useSkipContext } from '../../hooks/useSkipContext';


interface SkipCardProps {
  id:number;
  imageUrl: string;
  title: string;
  sizeLabel: string;
  price: number;
  hirePeriod: string;
  onSelect: () => void;
}

const SkipCard: React.FC<SkipCardProps> = ({
  id,
  imageUrl,
  title,
  sizeLabel,
  price,
  hirePeriod,
  onSelect,
}) => {
    const {selectedSkip} = useSkipContext()
    console.log(selectedSkip)
  return (
    <div
     onClick={onSelect}
      className={`group relative rounded-lg border-2 p-4 md:p-6 transition-all border-[#2A2A2A] hover:border-[#0037C1]/50 bg-[#1C1C1C] text-white cursor-pointer ${
        selectedSkip?.id === id  ?  'border-[#0037C1]' : ''
      }`} 
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
        />
        <div className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
          {sizeLabel}
        </div>
      </div>

      <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-sm text-gray-400 mb-4 md:mb-6">{hirePeriod} period</p>

      <div className="flex justify-between items-center mb-4">
        <span className="text-xl md:text-2xl font-bold text-[#0037C1]">£{price}</span>
      </div>

      <button
        onClick={onSelect}
        className="w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2 bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] hover:border-[#0037C1]"
      >
        <span>Select This Skip</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-right w-4 h-4"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default SkipCard;
