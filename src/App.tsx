import './App.css'
import Section1 from './components/sections/section_1'
import Section2 from './components/sections/section_2'
import Section3 from './components/sections/section_3'
import Section4 from './components/sections/section_4'
import Section5 from './components/sections/section_5'
import Section6 from './components/sections/section_6'
import Section61 from './components/sections/section_6.1'
import Section7 from './components/sections/section_7'
import Section8 from './components/sections/section_8'
import Menu from './components/sections/section_menu'

function App() {

  return (
    <>
      <Menu></Menu>
      <Section1 key={1}></Section1>
      <Section2 key={2}></Section2>
      <Section3 key={3}></Section3>
      <Section4 key={4}></Section4>
      <Section5 key={5}></Section5>
      <Section6 key={6}></Section6>
      <Section61 key={6}></Section61>
      <Section7 key={7}></Section7>
      <Section8 key={7}></Section8>
    </>
  )
}

export default App
