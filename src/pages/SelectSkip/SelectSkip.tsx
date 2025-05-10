import SlideUpPanel from "../../components/SlideUpPanel/SlideUpPanel";
import SkipCard from "../../components/SkipCard/SkipCard";
import { useEffect, useState } from "react";
import { getSkips } from "../../api/skip";
import { useSkipContext } from "../../context/SkipContext";
import { firstImage, secondImage } from "../../utils/data";
import type { Skip } from "../../utils/type";

const SelectSkip = () => {
    const { skips, setSkips, setSelectedSkip, loading, setLoading } = useSkipContext();
    const [panelPosition, setPanelPosition] = useState(0)

    const API_URL = import.meta.env.VITE_SKIP_API_URL

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

    useEffect(() => {
        setSelectedSkip(skips[0])
    }, [skips])

    const handleOnSelect = (skip: Skip) => {
        if (panelPosition === 100) {
            setPanelPosition(0)
        }
        setSelectedSkip(skip)
    }

    return (
        <main className="text-white">
            <div className="mx-auto max-w-7xl pb-3">
                <h2 className="text-2xl font-bold text-center mb-4">Choose Your Skip Size</h2>
                <p className="text-gray-400 text-center mb-8">Select the skip size that best suits your needs</p>
            </div>

            {loading ? (
                <div className="flex min-h-[20rem] justify-center items-center">
                    <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                </div>
            ) : skips.length === 0 ? (
                <p className="text-center text-gray-400">No skips available at the moment. Please try again later.</p>
            ) : (
                <div className="grid pb-[8rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {skips.map((skip: Skip) => (
                        <SkipCard
                            key={skip.id}
                            id={skip.id}
                            imageUrl={skip.allowed_on_road ? firstImage : secondImage}
                            title={`${skip.size} Yard skip`}
                            sizeLabel={`${skip.size} Yard`}
                            price={skip.price_before_vat + (skip.price_before_vat * (skip.vat / 100))}
                            hirePeriod={`${skip.hire_period_days} day hire`}
                            allowedOnRoad={skip.allowed_on_road}
                            onSelect={() => handleOnSelect(skip)}
                        />
                    ))}
                </div>
            )}

            <SlideUpPanel
                panelPosition={panelPosition}
                onBack={() => setPanelPosition(100)}
                onContinue={() => setPanelPosition(100)}
            />
        </main>
    );
};

export default SelectSkip;
