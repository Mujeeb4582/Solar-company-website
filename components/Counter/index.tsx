import Counter from './Counter';

const CounterUp: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:pl-24 p-12 bg-[#0C3D90]">
      <Counter count={185} label="Projects" labelClassName="text-[#FF7C24]" />
      <Counter count={100} label="Clients" labelClassName="text-[#FF7C24]" />
      <Counter count={25} label="Experiences" labelClassName="text-[#FF7C24]" />
    </div>
  );
};

export default CounterUp;
