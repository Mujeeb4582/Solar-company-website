import classNames from 'classnames';

type Props = {
  itemsLength: number;
  selectedIndex: number;
};
const AboutDots = ({ itemsLength, selectedIndex }: Props) => {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div className="flex gap-1 my-2 -translate-y-5">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            className={classNames({
              'h-2 justify-center px-5 mt-6 rounded-full transition-all duration-300 bg-[#FF7C24]':
                true,
              // tune down the opacity if slide is not selected
              'opacity-60': !selected,
            })}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};
export default AboutDots;
