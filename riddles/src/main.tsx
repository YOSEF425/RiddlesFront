import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes} from "react-router";
import Home from './components/home.tsx';
import Play from './components/play.tsx';
import Login from './components/login.tsx';
import Register from './components/register.tsx';
import CreateRiddle from './components/createRiddle.tsx';
// import Register from './components/register.tsx';
import './index.css'
import App from './App.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/play" element={<Play />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createRiddle" element={<CreateRiddle />} />
      <Route path="/register" element={<Register />} />


      {/* <Route path="/register" element={<Register />} /> */}
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
