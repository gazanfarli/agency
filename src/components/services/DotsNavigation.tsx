type DotsNavigationProps = {
  activeIndex: number;
  totalItems: number;
  onDotClick: (index: number) => void;
};

export const DotsNavigation = ({
  activeIndex,
  totalItems,
  onDotClick,
}: DotsNavigationProps) => {
  return (
    <div className="flex justify-center mt-6 gap-2">
      {Array.from({ length: totalItems }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-4 h-4 rounded-full transition-colors ${
            activeIndex === index ? "bg-gradient-to-tr from-[#57007B] to-[#F76680]" : "bg-[#E2E8F0]"
          }`}
        />
      ))}
    </div>
  );
};
