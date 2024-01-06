import Footer from "./components/Footer"
import Mainheading from "./components/Mainheading"
import Nav from "./components/Nav"
import Nftseries from "./components/Nftseries"
import Marketing from "./components/marketing"

export default function App() {
  return (
   <main className="p-10 ">
    <section>
    <Nav />
   </section>
   <section>
    <Mainheading />
   </section>
   <section>
    <Marketing />
   </section>
   <section>
    <Nftseries />
   </section>
   <section>
    <Footer />
   </section>
   </main>
  )
}