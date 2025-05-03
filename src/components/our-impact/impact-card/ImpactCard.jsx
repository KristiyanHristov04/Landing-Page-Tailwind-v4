import CountUp from 'react-countup';

const ImpactCard = ({ heading, description, icon }) => {
  const numericValue = parseInt(heading.replace(/[,+]/g, ""));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="mb-4 flex justify-center items-center">{icon}</div>
      <div className="text-4xl font-bold text-secondary">
        <CountUp
          end={numericValue}
          duration={2}
          separator=","
          enableScrollSpy
          scrollSpyOnce
        />
        {heading.includes("+") && "+"}
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ImpactCard;
