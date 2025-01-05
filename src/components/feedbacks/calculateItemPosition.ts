export const calculateItemPosition = (
  index: number,
  currentIndex: number,
  totalItems: number
) => {
  const diff = (index - currentIndex + totalItems) % totalItems;
  const adjustedDiff = diff > totalItems / 2 ? diff - totalItems : diff;

  const baseClasses =
    "transition-all duration-500 ease-in-out absolute cursor-pointer w-[85px] md:w-[100px] lg:w-[138px]";

  switch (adjustedDiff) {
    case 0:
      return {
        className: `${baseClasses} scale-100 opacity-100 z-50`,
        style: { transform: "translateX(0%)" },
      };
    case 1:
      return {
        className: `${baseClasses} scale-90 opacity-70 z-40`,
        style: { transform: "translateX(120%)" },
      };
    case 2:
      return {
        className: `${baseClasses} scale-80 opacity-40 z-30`,
        style: { transform: "translateX(240%)" },
      };
    case -1:
      return {
        className: `${baseClasses} scale-90 opacity-70 z-40`,
        style: { transform: "translateX(-120%)" },
      };
    case -2:
      return {
        className: `${baseClasses} scale-80 opacity-40 z-30`,
        style: { transform: "translateX(-240%)" },
      };
    default:
      return {
        className: "hidden",
        style: {},
      };
  }
};
