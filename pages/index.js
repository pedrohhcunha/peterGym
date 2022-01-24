import Initial from "../components/Initial/component"
import Mission from "../components/Misssion/component"
import Services from "../components/Services/component"
import Plans from "../components/Plans/component"
import Faq from "../components/Faq/component"
import Footer from "../components/Footer/component"
import Header from "../components/Header/component"

export default function Home() {
  return (
    <main>
      <Header />
      <Initial />
      <Mission />
      <Services />
      <Plans />
      <Faq />
      <Footer />
    </main>
  )
}
