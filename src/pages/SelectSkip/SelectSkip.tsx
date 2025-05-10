import SlideUpPanel from "../../components/SlideUpPanel/SlideUpPanel";
import SkipCard from "../../components/SkipCard/SkipCard";
import { useEffect } from "react";
import { getSkips } from "../../api/skip";
import { useSkipContext } from "../../context/SkipContext";
import { firstImage,secondImage } from "../../utils/data";

const SelectSkip = () => {
  const { skips, setSkips, setSelectedSkip, loading, setLoading } = useSkipContext();

  const API_URL =
    "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

  useEffect(() => {
    const fetchSkips = async () => {
      setLoading(true);
      try {
        const data = await getSkips(API_URL);
        setSkips(data);
      } catch (error) {
        console.error("Error fetching skips:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSkips();
  }, [setSkips, setLoading]);


  return (
    <main className="text-white">
      <div className="mx-auto max-w-7xl p-4 pb-3">
        <h2 className="text-2xl font-bold text-center mb-4">Choose Your Skip Size</h2>
        <p className="text-gray-400 text-center mb-8">Select the skip size that best suits your needs</p>
      </div>

      {loading ? (
        <p className="text-center text-gray-400">Loading skips...</p>
      ) : (
        <div className="grid pb-[8rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skips.map((skip) => (
            <SkipCard
              key={skip.id}
              id={skip.id}
              imageUrl={skip.allowed_on_road ? firstImage : secondImage}
              title={`${skip.size} Yard skip`}
              sizeLabel={`${skip.size} Yard`}
              price={skip.price_before_vat + (skip.price_before_vat * (skip.vat / 100))}
              hirePeriod={`${skip.hire_period_days} day hire`}
              onSelect={() => setSelectedSkip(skip)}
            />
          ))}
        </div>
      )}

      <SlideUpPanel />
    </main>
  );
};

export default SelectSkip;
