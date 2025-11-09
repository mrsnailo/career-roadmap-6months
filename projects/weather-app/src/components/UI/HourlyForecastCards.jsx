const HourlyForecastCard = ({ icon, time, value, unit }) => {
  return (
    <div className="stat-card flex flex-col justify-center items-center rounded-md shadow-md glass-card p-4 text-center w-full">
      <p className="title font-bold">{time}</p>
      <div className="icon my-3">{icon}</div>
      <p className="value font-bold">
        {value} {unit}
      </p>
    </div>
  );
};

export default HourlyForecastCard;
