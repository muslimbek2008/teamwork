import Alisher from './components/alisher/Alisher'
import Bahriddin from './components/bahriddin/Bahriddin'
import Otabek from './components/otabek/Otabek'
import Muslimbek from './components/muslimbek/Muslimbek'
import Shohruhbek from './components/shohruhbek/Shohruhbek'
import Oysha from './components/oysha/Oysha'
import Omina from './components/omina/Omina'
import vector from "./assets/Vector.png"
import vectorr from "./assets/Vectorr.png"
import okam from "./assets/okam.png"


// otabek
const paragrf="Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incidsdidunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excteur non laboris id qui ad."

const App = () => {
  const headerData = {
    logo: "antools.",
    menu: ["Home", "Categories", "My Collections", "Blog"],
    loginText: "Login",
    signupText: "Sign Up",
    title: "Awesome tools for Designer & Developer",
    desc: "Antool is a web collection of information on paid or free Design and Development tools",
    btnText: "Search",
    placeholder: "Find more than 430+ tools..."
  };


  return (
    <div className="bg-[#1E2125] min-h-screen">
      <Muslimbek data={headerData} /> 
      <Alisher />
      <Bahriddin />
      <Shohruhbek /> 
      <Otabek vector={vector} vectorr={vectorr} okam={okam} paragrf={paragrf}/>

      <Oysha />
      <Omina />
    </div>

  )
}

export default App;
