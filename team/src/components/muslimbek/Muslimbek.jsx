// 1. IMPORT YOUR PICTURES HERE
import logoImg from '../../assets/logo.png'
import heroImg from '../../assets/hero2.png'

const Muslimbek = ({ data }) => {
  return (
    <div className="text-white font-sans bg-[#1E2125]">
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold tracking-tight">{data.logoText || "antools."}</span>
        </div>
        
        <nav className="hidden md:flex gap-8 text-gray-400">
          {data.menu.map((item, index) => (
            <a key={index} href="#" className="hover:text-white transition-colors">{item}</a>
          ))}
        </nav>

        <div className="flex gap-6 items-center">
          <button className="text-gray-400 hover:text-white">{data.loginText}</button>
          <button className="bg-[#FF6E30] px-6 py-2 rounded-lg hover:bg-orange-700 transition-all font-medium">
            {data.signupText}
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-10 py-20 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-[1.2]">
            {data.title}<span className="text-[#FF6E30]">.</span>
          </h1>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            {data.desc}
          </p>

          <div className="relative flex items-center group max-w-md">
            <div className="absolute left-5 text-gray-500">
              <svg xmlns="http://w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder={data.placeholder}
              className="w-full bg-[#283036] p-5 pl-14 rounded-2xl border border-transparent focus:border-gray-600 focus:outline-none transition-all"
            />
            <button className="absolute right-2 bg-[#FF6E30] px-8 py-3 rounded-xl hover:bg-orange-700 transition-all font-semibold">
              {data.btnText}
            </button>
          </div>
        </div>

        <div className="hidden lg:block relative pl-10">
          <img 
            src={heroImg} 
            alt="Hero Illustration" 
            className="w-full h-auto object-contain drop-shadow-2xl" 
          />
          
          {/* Temporary placeholder if you haven't linked the image yet */}
          <div className="w-full h-80 bg-gradient-to-br from-gray-800 to-transparent rounded-3xl opacity-20 border border-gray-700 border-dashed flex items-center justify-center">
            <p className="text-gray-500 italic">Insert heroImg here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Muslimbek;
