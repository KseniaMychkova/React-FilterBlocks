import { Routes, Route } from 'react-router-dom'
import MainPage from './MainPage'
import VacancyPage from './VacancyPage/Vacancy'
import SelectedPage from './SelectedPage/SelectedPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/vacancy/:id" element={<VacancyPage />}></Route>
      <Route path="/selected" element={<SelectedPage />}></Route>
    </Routes>
  )
}

export default App
