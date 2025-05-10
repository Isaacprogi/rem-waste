import { FiAlertTriangle } from 'react-icons/fi';

export const NotAllowedBanner = () => {
  return (
    <div className="absolute mr-2 bottom-3 left-2 z-20 space-y-2">
      <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
        <FiAlertTriangle className="w-4 h-4 text-yellow-500 shrink-0" />
        <span className="text-xs font-medium text-yellow-500">
          Not Allowed On The Road
        </span>
      </div>
    </div>
  );
}
