
const Shohruhbek = ({ tools }) => {
  return (
    <div className="bg-[#1E252B] w-full h-full p-16 flex justify-between text-white">
      <div className="max-w-xs">
        <h1 className="text-4xl font-bold mb-6">Newcomer Tools</h1>
        <p className="text-gray-400 mb-10">
          Wow! see the latest update of the most recommended tools from reliable
          designers and developers
        </p>
        <button className="bg-[#FF6E30] px-7 py-2 rounded-xs">Explore more</button>
      </div>

      <div className="grid grid-cols-2 gap-x-16 gap-10">
        {tools.map((item) => (
          <div key={item.id} className={`p-8 rounded-2xl w-72`}>
            <div className="flex items-center gap-4 mb-6">
              <img src={item.img} alt={item.title} className="w-12 h-12" />
              <div>
                <h2 className="text-xl font-bold text-gray-200">
                  {item.title}
                </h2>
                <p className="text-orange-400 text-sm">{item.price}</p>
              </div>
            </div>

            <p className="text-gray-500 text-sm mb-8 ">{item.desc}</p>

            <div className="flex items-center justify-between">
              <div className="flex gap-4 text-gray-500">
                <span>❤</span>
                <span>📁</span>
              </div>

              <button>Visit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shohruhbek;
