export default ServiceCard = ({ icon: Icon, title }) => {
  return (
    <div className="bg-lime-200 p-10 rounded flex flex-col place-items-center shadow-lg shadow-lime-200">
      <div className="relative text-gray-900">
        <Icon className="size-32 mb-4" />
        <FaBug className="absolute top-7 left-9 size-14" />
      </div>
      <p className="text-[#931214] text-center text-2xl font-bold">{title}</p>
    </div>
  );
};
