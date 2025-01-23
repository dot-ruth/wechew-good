import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import EpisodesSection from './components/ui/EpisodesSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-400/90 text-blue-900">
      {/* Header */}
      <header className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">ወቸው GOOD</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#" className="hover:text-blue-700">Home</Link></li>
              <li><Link href="#episodes" className="hover:text-blue-700">Episodes</Link></li>
              <li><Link href="#about" className="hover:text-blue-700">About</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to ወቸው GOOD</h2>
          <p className="text-xl mb-8">LETS HAVE A <i>Wechew</i> GOOD TIME</p>
          <Button className="bg-blue-700 text-yellow-400 hover:bg-blue-800">
            <Link href="https://www.youtube.com/@WECHEWGOOD" target='blank'>
              Subscribe Now
            </Link>
          </Button>
        </div>
      </section>

      {/* Latest Episode */}
      <section id="episodes" className="container mx-auto py-12 px-4">
        <h3 className="text-2xl font-bold mb-6">Latest Episode</h3>
        <Card className="bg-yellow-300/90">
          <CardHeader>
            <CardTitle className="text-blue-900">በስደት ላይ ያሉ የፍቅር ጉዳዮች |ወቸው GOOD|</CardTitle>
            <CardDescription>Episode #121 • Jan 22, 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src='https://img.youtube.com/vi/HfxUpHmoWb8/maxresdefault.jpg'
              alt="Latest episode thumbnail"
              width={400}
              height={200}
              className="w-full rounded-lg mb-4"
            />
          </CardContent>
          <CardFooter>
            <Button className="bg-blue-700 text-yellow-400 hover:bg-blue-800">
            <Link href="https://www.youtube.com/watch?v=HfxUpHmoWb8" target='blank'>
              Listen Now
            </Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* Recent Episodes */}
      <section className="container mx-auto py-12 px-4">
      <EpisodesSection></EpisodesSection>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-12 px-4">
        <h3 className="text-2xl font-bold mb-6">About ወቸው GOOD</h3>
        <div className="bg-yellow-300/90 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <Image
              src='/assets/img/logo.png'
              alt="Podcast Host"
              width={300}
              height={300}
              className="rounded-full mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <p className="mb-4">
              ውቸው GOOD is the most vibrant podcast channel in Ethiopia entertaining several topics filled with laughter, experience, ideas, philosophies and other worth discussing topics. Our channel offers multiple choices of guests with various life experiences and knowledge sharing their stories in a very natural and humanly way so that we can learn and enjoy each and every moment with you our audience. ወቸው GOOD aspires to be the place where new ideas flourish and help cultivate them in way the generation can benefit from them. 
              </p>
              <p className="mb-4">
              ወቸው GOOD was founded and established by Abel Misrak, with the help of Bereket Tadesse and Yonatan Fasil along with co hosts Mahider Kebede and Dania Awet. ወቸው GOOD aims to be the biggest show in Ethiopia with all the variety of guests and ideas while becoming voice to the new generation! 
              </p>

              <p className="mb-4">
              ወቸው GOOD የአዲሱ ትውልድ ድምፅ ነው!!!
               </p>

               <p className="mb-4">
               ወቸው GOOD is the voice of the new generation!!!
               </p>

            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="container mx-auto py-12 px-4">
        <h3 className="text-2xl font-bold mb-6 text-center">Subscribe to Our Podcast</h3>
        <div className="flex flex-wrap justify-center gap-4" >
          <button className="px-4 py-2 text-blue-700 border border-blue-700 rounded hover:bg-blue-700 hover:text-yellow-400">
           <Link href="https://www.youtube.com/@WECHEWGOOD" target='blank'>
           YouTube
           </Link> 
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-500/90 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 ወቸው GOOD. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

