import SlideUpPanel from "../../components/SlideUpPanel"
import SkipCard from "../../components/SkipCard"
import { useEffect, useState } from "react"
import { getSkips } from "../../api/skip"
import type {Skip} from "../../utils/type"

const SelectSkip = () => {
    const [skips, setSkips] = useState<[]>([])
    const API_URL = "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"

    useEffect(() => {
        const fetchSkips = async () => {
            try {
                const data = await getSkips(`${API_URL}`); // Corrected
                setSkips(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching skips:', error);
            }
        };
        fetchSkips();
    }, []);


    const firstImage = "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg"
    const secondImage = "	https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg"

    return (
        <main className="min-h-screen px-4 py-8 bg-[#121212] text-white">
            <div className="mx-auto max-w-7xl p-4 pb-3">
                <h2 className="text-2xl font-bold text-center mb-4">Choose Your Skip Size</h2>
                <p className="text-gray-400 text-center mb-8">Select the skip size that best suits your needs</p>
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {skips.map((skip: Skip) => {
                    return (
                        <SkipCard
                            key={skip.id}
                            imageUrl={
                                skip.allowed_on_road?
                                firstImage:secondImage
                            } 
                            title={`${skip.size} Yard skip`}
                            sizeLabel={`${skip.size} Yard`}
                            price={skip.price_before_vat + (skip.price_before_vat * (skip.vat / 100))} // or use just price_before_vat
                            hirePeriod={`${skip.hire_period_days} day hire`}
                            onSelect={() => console.log('Selected skip', skip.id)}
                        />
                    );
                })}
                <SlideUpPanel />
            </div>

        </main>
    )
}

export default SelectSkip