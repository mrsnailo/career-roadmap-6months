const StatCard = ({ icon, title, value, unit }) => {
  return (
    <div className="stat-card flex flex-col justify-center items-center rounded-md shadow-md glass-card p-4 text-center w-full">
      <div className="icon my-3">{icon}</div>
      <p className="title font-semibold">{title}</p>
      <p className="value font-bold">
        {value} {unit}
      </p>
    </div>
  );
};

export default StatCard;
