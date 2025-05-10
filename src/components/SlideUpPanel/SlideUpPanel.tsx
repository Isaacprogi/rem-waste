import { motion } from 'framer-motion';
import { useState } from 'react';
import { useSkipContext } from '../../context/SkipContext';
import { MdArrowForward } from 'react-icons/md';

const SlideUpPanel = () => {
  const [panelPosition, setPanelPosition] = useState(0);

  const handleBack = () => {
    console.log('Back button clicked');
    setPanelPosition(100);
  };

  const handleContinue = () => {
    console.log('Continue button clicked');
    setPanelPosition(100);
  };

  // Get selected skip from context
  const { skips, selectedSkip } = useSkipContext();

  return (
    skips.length > 0 ?
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-[#2A2A2A] p-4 z-50"
        initial={{ y: '100%' }}
        animate={{ y: `${panelPosition}%` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">{selectedSkip?.size} Yard skip</h3>
              <div>
                <span className="text-xl font-bold text-[#0037C1]">£{selectedSkip?.price_before_vat + (selectedSkip?.price_before_vat * (selectedSkip?.vat / 100)) || '0'}</span>
                <span className="text-sm text-gray-400 ml-2">{selectedSkip?.hire_period_day || 'N/A'} days</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={handleBack} className="btn-secondary w-full">Back</button>
              <button onClick={handleContinue} className="btn-primary w-full">Continue</button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div>
                <p className="text-sm text-gray-400">{selectedSkip?.title || 'Skip Title'}</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#0037C1]">£{selectedSkip?.price || '0'}</span>
                <span className="text-sm text-gray-400 ml-2">{selectedSkip?.hirePeriod || 'N/A'} day hire</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={handleBack} className="btn-secondary">Back</button>
              <button onClick={handleContinue} className="btn-primary flex items-center gap-2">
                Continue
                <MdArrowForward className="w-4 h-4" /> {/* Using React Icon */}
              </button>
            </div>
          </div>
        </div>
      </motion.div> : <></>
  );
};

export default SlideUpPanel;