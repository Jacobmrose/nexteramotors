import About from './sections/About'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
export default function Page() {
  return (
    <main className='w-full h-full'>
      <Hero />
      <About />
      <Contact />
    </main>
  )
}
