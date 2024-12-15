import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Youtube, AirplayIcon as Spotify, PodcastIcon as ApplePodcast, Rss } from 'lucide-react'
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-400/90 text-blue-900">
      {/* Header */}
      <header className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">Your Podcast Name</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#" className="hover:text-blue-700">Home</Link></li>
              <li><Link href="#episodes" className="hover:text-blue-700">Episodes</Link></li>
              <li><Link href="#about" className="hover:text-blue-700">About</Link></li>
              <li><Link href="#contact" className="hover:text-blue-700">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Your Podcast</h2>
          <p className="text-xl mb-8">Discover amazing conversations and insights every week!</p>
          <Button className="bg-blue-700 text-yellow-400 hover:bg-blue-800">
            Subscribe Now
          </Button>
        </div>
      </section>

      {/* Latest Episode */}
      <section id="episodes" className="container mx-auto py-12 px-4">
        <h3 className="text-2xl font-bold mb-6">Latest Episode</h3>
        <Card className="bg-yellow-300/90">
          <CardHeader>
            <CardTitle className="text-blue-900">Episode Title Goes Here</CardTitle>
            <CardDescription>Episode #123 • May 15, 2023</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Latest episode thumbnail"
              width={400}
              height={200}
              className="w-full rounded-lg mb-4"
            />
            <p>Brief description of the episode goes here. This should be a short teaser that encourages listeners to check out the full episode.</p>
          </CardContent>
          <CardFooter>
            <Button className="bg-blue-700 text-yellow-400 hover:bg-blue-800">
              Listen Now
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* Recent Episodes */}
      <section className="container mx-auto py-12 px-4">
        <h3 className="text-2xl font-bold mb-6">Recent Episodes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((episode) => (
            <Card key={episode} className="bg-yellow-300/90">
              <CardHeader>
                <CardTitle className="text-blue-900">Episode Title {episode}</CardTitle>
                <CardDescription>Episode #{123 - episode} • May {15 - episode}, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={`/placeholder.svg?height=150&width=300`}
                  alt={`Episode ${episode} thumbnail`}
                  width={300}
                  height={150}
                  className="w-full rounded-lg mb-4"
                />
                <p className="line-clamp-3">Brief description of the episode goes here. This should be a short teaser that encourages listeners to check out the full episode.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-yellow-400">
                  Listen
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-12 px-4">
        <h3 className="text-2xl font-bold mb-6">About Our Podcast</h3>
        <div className="bg-yellow-300/90 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Podcast Host"
              width={300}
              height={300}
              className="rounded-full mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h4 className="text-xl font-bold mb-2">Your Host Name</h4>
              <p className="mb-4">
                Brief bio of the podcast host goes here. Describe your background, expertise, and what inspired you to start this podcast. Share your passion for the topics you cover and what listeners can expect from your show.
              </p>
              <p>
                Our podcast is dedicated to [describe the main focus or theme of your podcast]. Each episode, we bring you [describe the content, e.g., interviews with industry experts, deep dives into fascinating topics, etc.]. Our goal is to [describe the value you provide to your listeners, e.g., educate, entertain, inspire].
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="container mx-auto py-12 px-4">
        <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
        <Card className="bg-yellow-300/90">
          <CardHeader>
            <CardTitle className="text-blue-900">Get in Touch</CardTitle>
            <CardDescription>Have a question or suggestion? We'd love to hear from you!</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-900 mb-1">Name</label>
                <Input id="name" placeholder="Your Name" className="bg-yellow-100" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-1">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" className="bg-yellow-100" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-900 mb-1">Message</label>
                <Textarea id="message" placeholder="Your message here..." className="bg-yellow-100" />
              </div>
              <Button className="bg-blue-700 text-yellow-400 hover:bg-blue-800">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Subscribe Section */}
      <section className="container mx-auto py-12 px-4">
        <h3 className="text-2xl font-bold mb-6 text-center">Subscribe to Our Podcast</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-yellow-400">
            <Youtube className="mr-2 h-4 w-4" /> YouTube
          </Button>
          <Button variant="outline" className="text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-yellow-400">
            <Spotify className="mr-2 h-4 w-4" /> Spotify
          </Button>
          <Button variant="outline" className="text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-yellow-400">
            <ApplePodcast className="mr-2 h-4 w-4" /> Apple Podcasts
          </Button>
          <Button variant="outline" className="text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-yellow-400">
            <Rss className="mr-2 h-4 w-4" /> RSS Feed
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-500/90 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Your Podcast Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

