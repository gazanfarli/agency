type ServicesCountProps = {
  activeIndex: number;
  totalItems: number;
};

export const ServicesCount = ({
  activeIndex,
  totalItems,
}: ServicesCountProps) => {
  return (
    <div className="absolute hidden md:block bottom-1 right-1 bg-white p-2 rounded-lg shadow-md text-sm">
      {activeIndex + 1}/{totalItems}
    </div>
  );
};
