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
import logo from './assets/logo.png'


// otabek
const paragrf="Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incidsdidunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excteur non laboris id qui ad."


const footer_menu = [
  {
    title: "Contact Us",
    links: ["+621987463", "M Building, No.10 A", "antools@awesome.com"]
  },
  {
    title: "Categories",
    links: ["Design", "Development"]
  },
  {
    title: "Company Info",
    links: ["About Us", "Our Partners", "Blog"]
  }
];
const App = () => {
  return (
    <div>
      <Muslimbek/> 
      <Alisher/>
      <Bahriddin/>
      <Shohruhbek/> 
      <Otabek vector={vector} vectorr={vectorr} okam={okam} paragrf={paragrf}/>
      <Oysha/>
      <Omina logo={logo} menu={footer_menu} />
    </div>
  )
}

export default App