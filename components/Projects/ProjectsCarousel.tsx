// components/Carousel.tsx
import React from 'react';
import ProjectsDots from './ProjectsDots';
import ProjectsCarouselControls from './ProjectsCarouselControls';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { PropsWithChildren, useEffect, useState } from 'react';

type Props = PropsWithChildren & EmblaOptionsType;

const ProjectsCarousel = ({ children, ...options }: Props) => {
  const length = React.Children.count(children);
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const canScrollNext = !!emblaApi?.canScrollNext();
  const canScrollPrev = !!emblaApi?.canScrollPrev();

  // We need to track the selectedIndex to allow this component to re-render in react.
  // Since emblaRef is a ref, it won't re-render even if there are internal changes to its state.
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      // selectedScrollSnap gives us the current selected index.
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on('select', selectHandler);
    // cleanup
    return () => {
      emblaApi?.off('select', selectHandler);
    };
  }, [emblaApi]);

  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
      <ProjectsDots itemsLength={length} selectedIndex={selectedIndex} />
      <ProjectsCarouselControls
        canScrollNext={canScrollNext}
        canScrollPrev={canScrollPrev}
        onNext={() => emblaApi?.scrollNext()}
        onPrev={() => emblaApi?.scrollPrev()}
      />
    </>
  );
};
export default ProjectsCarousel;
