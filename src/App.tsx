import './App.css'
import Section1 from './components/sections/section_1'
import Section2 from './components/sections/section_2'
import ProcessOverview from './components/sections/processoverview'
import Section4 from './components/sections/section_4'
import Section5 from './components/sections/section_5'
import Section6 from './components/sections/section_6'
import Comments from './components/sections/comments'
import Section7 from './components/sections/section_7'
import Section8 from './components/sections/section_8'
import Menu from './components/sections/menu'

function App() {

  return (
    <>
      <Menu/>
      <Section1 key={1}></Section1>
      <Section2 key={2}></Section2>
      <ProcessOverview key={3}/>
      <Section4 key={4}></Section4>
      <Section5 key={5}></Section5>
      <Section6 key={6}></Section6>
      <Comments key={6}/>
      <Section7 key={7}></Section7>
      <Section8 key={7}></Section8>
    </>
  )
}

export default App
