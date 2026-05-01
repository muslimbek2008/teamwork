const Omina = ({ logo, menu }) => {
  return (
    <footer className="bg-[#1E252B] py-16 text-white">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-wrap justify-between gap-10">
        
        <div className="w-[300px] flex flex-col gap-6">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-[140px] h-[38px]" 
          />
          
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-[16px]">Copyright 2021. Antools</h3>
            <p className="text-[14px] opacity-50">
              Antool is a web collection of information on paid or free Design and Development tools
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-20">
          {menu?.map((item, index) => (
            <div key={index} className="flex flex-col gap-6">
              <h4 className="font-bold text-[18px]">{item.title}</h4>
              <ul className="flex flex-col gap-4">
                {item.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-[16px] opacity-60 hover:opacity-100">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Omina;