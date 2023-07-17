import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Greetings from './components/greetings'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
