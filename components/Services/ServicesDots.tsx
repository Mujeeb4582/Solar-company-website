import classNames from "classnames";

type Props = {
  itemsLength: number;
  selectedIndex: number;
};
const ServicesDots = ({ itemsLength, selectedIndex }: Props) => {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div className="flex gap-1 my-2 -translate-y-5">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            className={classNames({
              "h-1 justify-center px-5 rounded-full transition-all duration-300 bg-[#0C3D90]":
                true,
              // tune down the opacity if slide is not selected
              "opacity-50": !selected,
            })}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};
export default ServicesDots;
