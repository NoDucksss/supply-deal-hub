import machineryImg from "@/assets/machinery.png";
import electronicsImg from "@/assets/electronics.png";
import automotiveImg from "@/assets/automotive.png";
import chemistryImg from "@/assets/chemistry.png";

const industries = [
  {
    title: "Machinery and Plant Engineering",
    image: machineryImg,
  },
  {
    title: "Electronics",
    image: electronicsImg,
  },
  {
    title: "Automotive",
    image: automotiveImg,
  },
  {
    title: "Chemistry and Pharmaceuticals",
    image: chemistryImg,
  },
];

const IndustryCarousel = () => {
  return (
    <div className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
          THE INDUSTRY TRUSTS NEGOTIAI
        </p>
        <h2 className="text-4xl md:text-5xl font-light mb-12">Leading in the industry</h2>
        
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-medium mb-6 min-h-[3.5rem]">{industry.title}</h3>
              <div className="w-full h-48 flex items-center justify-center opacity-30">
                <img src={industry.image} alt={industry.title} className="max-w-full max-h-full object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryCarousel;
