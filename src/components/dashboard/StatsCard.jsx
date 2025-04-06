const StatsCard = () => {
  const stats = [
    { label: "Revenue", value: "₹10,000", increment: 50 },
    { label: "Orders", value: "No. 10" },
    { label: "Ads Spend", value: "₹1,000" },
    { label: "Shipping Spend", value: "₹1,000" },
    { label: "Product Cost", value: "₹5,000" },
  ];
  return (
    <div className="grid grid-cols-5 bg-[#161616] rounded-md border border-gray-800 text-white p-4 space-x-6 overflow-x-auto">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`flex flex-col items-center px-2 ${
            index !== stats.length - 1 ? "border-r border-gray-600 pr-4" : ""
          }`}
        >
          <span className="text-sm text-gray-400">{stat.label}</span>
          <p className="text-2xl ">
            {stat.value}
            {stat.increment && (
              <span className="text-p1 text-xs ms-1">{`{${stat.increment}%}`}</span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
