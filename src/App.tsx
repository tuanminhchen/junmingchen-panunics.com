import { HashRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Publications from './pages/Publications'
import Projects from './pages/Projects'
import Works from './pages/Works'
import Amusement from './pages/Amusement'
import Panunics from './pages/Panunics'
import About from './pages/About'

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/works" element={<Works />} />
          <Route path="/amusement" element={<Amusement />} />
          <Route path="/panunics" element={<Panunics />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
