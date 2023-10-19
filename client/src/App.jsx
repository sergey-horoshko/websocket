import socketIO from 'socket.io-client';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home.jsx';
import ChatPage from './components/chat/components/ index.jsx';

const socket = socketIO.connect('http://localhost:5000')

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home socket={socket}/>} />
      <Route path='/chat' element={<ChatPage socket={socket}/>} />
    </Routes>
  )
}

export default App
