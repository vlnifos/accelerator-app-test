import { Footer } from "components/footer/Footer"
import { Header } from "components/header/Header"
import { RoutesList } from "components/routes-list/RoutesList"

export const Layout = () => {
  return (
    <div>
      <Header isAuth />

      <RoutesList />
      
      <Footer />
    </div>
  )
}