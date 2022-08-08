import React from "react"
import { HomePage } from "pages/home-page/HomePage"
import { Route, Routes } from "react-router-dom"

export const RoutesList = (props: any) => {
  return (
    <Routes>
      <Route
        path={'/'}
        element={<HomePage />}
      />
    </Routes>
  )
}