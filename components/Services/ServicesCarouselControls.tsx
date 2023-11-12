// components/CarouselControls.tsx
import classNames from 'classnames';

type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};
const ServicesCarouselControls = (props: Props) => {
  return (
    <div className="flex justify-end gap-2 ">
      <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        disabled={!props.canScrollPrev}
        className={classNames({
          'px-4 py-2 text-white': true,
          'bg-[#FF7C24]': !props.canScrollPrev,
          'bg-indigo-400': props.canScrollPrev,
        })}
      >
        Prev
      </button>
      <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
        className={classNames({
          'px-4 py-2 text-white ': true,
          'bg-[#FF7C24]': !props.canScrollNext,
          'bg-indigo-400': props.canScrollNext,
        })}
      >
        Next
      </button>
    </div>
  );
};
export default ServicesCarouselControls;
