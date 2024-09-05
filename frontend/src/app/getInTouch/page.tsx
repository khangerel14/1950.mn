import { About, CarCom, Chances, Footer, Navbar } from "@/components"

const Page = () => {
  return (
    <div className='bg-black'>
      <Navbar /> 
      <About />
      <CarCom />
      <Chances />
      <Footer />
    </div>
  )
}

export default Page