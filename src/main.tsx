import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/style/global.css'
import { BrowserRouter,Route,Routes} from "react-router";
import Play from './components/play.tsx';
import Login from './components/login.tsx';
import Register from './components/register.tsx';
import CreateRiddle from './components/admin-tools/createRiddle.tsx';
import Display from './components/admin-tools/display.tsx';
import Update from './components/admin-tools/update.tsx';
import Delete from './components/admin-tools/delete.tsx';
import AdminNav from './components/extraAdminOpts.tsx';
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
      <Route path="/admin" element={<AdminNav />} />


      <Route path="/admin/create" element={<CreateRiddle />} />
      <Route path="/admin/display" element={< Display/>} />
      <Route path="/admin/update" element={<Register />} />
      <Route path="/admin/delete" element={<Register />} />



    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
