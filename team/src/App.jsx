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


const tools = [
  {
    id: 1,
    title: "Zeplin",
    price: "Free & Paid",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsroxnqgWp_NBLzN3OsNu3OD6UPHDnJgumQ&s",
  },
  {
    id: 2,
    title: "PHPStorm",
    price: "Free",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://img.freepik.com/premium-psd/3d-photoshop-icon_913262-193.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 3,
    title: "Toolbox",
    price: "Free",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://img.freepik.com/free-photo/3d-rendering-holographic-cube_23-2150979698.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 4,
    title: "Procreate",
    price: "Paid",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Procreate_icon.png/250px-Procreate_icon.png",
  },
];

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
    <div>
      <Muslimbek/> 
      <Alisher/>
      <Bahriddin/>
      <Shohruhbek tools={tools} />
      <Otabek/>
      <Oysha/>
      <Omina/>
    </div>

  )
}

export default App
