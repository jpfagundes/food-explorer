import { Routes, Route } from "react-router-dom";

import { Home } from '../pages/Home';
import { Plate } from '../pages/Plate';
import { Details } from '../pages/Details';
import { Order } from '../pages/Order';

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
      <Route path="/plate" element={<Plate />} />
      <Route path="/details/:id" element={<Details />} />

    </Routes>
  )
}