import { Routes, Route } from "react-router-dom";

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Payment } from '../pages/Payment';
import { New } from "../pages/New";

import { useAuth } from '../hooks/auth'


export function AppRoutes() {

  const {user} = useAuth()

  const handleRoutes = () => {
    if(user.admin){
      return (
      <Routes >

      <Route path="/" element={<Home />} />
      <Route path="/create" element={<New />} />
      <Route path="/details/:id" element={<Details />} />

      </Routes>

      )
    } else {
      return (
        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/payment" element={<Payment />} />

        </Routes>
      )
    }
  }

  return (
    handleRoutes()
  )
}