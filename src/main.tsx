import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/style/global.css'
import { BrowserRouter,Route,Routes} from "react-router";
import Login from './components/login.tsx';
import Register from './components/register.tsx';
import CreateRiddle from './components/admin-tools/createRiddle.tsx';
import Update from './components/admin-tools/update.tsx';
import Delete from './components/admin-tools/delete.tsx';
import AdminNav from './components/extraAdminOpts.tsx';
import PlayGame from './components/playGame.tsx';
import Show from './components/show.tsx';
import './index.css'
import App from './App.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/play" element={<PlayGame />} />
      <Route path="/login" element={<AdminNav/>} />
      <Route path="/createRiddle" element={<CreateRiddle />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<AdminNav />} />


      <Route path="/admin/create" element={<CreateRiddle />} />
      <Route path="/admin/update" element={<Register />} />
      <Route path="/show" element={< Show/>} />




    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
