import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useHotkeys, useLocalStorage } from '@mantine/hooks'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<'light' | 'dark'>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  })

  const toggleColorScheme = (value?: 'light' | 'dark') =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  useHotkeys([['mod+J', () => toggleColorScheme()]])

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </Router>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App