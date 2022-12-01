import { Route, Routes } from 'react-router-dom'

import CreateEvent from './pages/CreateEvent'
import Dashboard from './pages/Dashboard'
import Drinks from './pages/Drinks'
import EventDetail from './pages/EventDetail'
import Wishlist from './pages/Wishlist'

function App() {
  return (
    <Routes>
      <Route path='/event' element={<CreateEvent />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/dashboard/:event_id' element={<EventDetail />} />
      <Route path='/Wishlist/:guest_code' element={<Wishlist />} />
      <Route path='/drinks' element={<Drinks />} />
    </Routes>
  )
}

export default App
