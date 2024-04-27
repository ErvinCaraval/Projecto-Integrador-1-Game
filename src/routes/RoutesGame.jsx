import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Castillo } from '../pages/castillo/Castillo'

export const RoutesGame = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/castillo" element={<Castillo/>} />
        </Routes>
    </BrowserRouter>
  )
}
