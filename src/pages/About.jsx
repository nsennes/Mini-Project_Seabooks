import React from 'react'
import Navbar from '../components/Navbar'
import waves from '../assets/images/waves.png'

function About() {
    return (
      <>
        <Navbar />
        <div className="bg-white">
          <div className="absolute left-8 top-20">
            <h1 className="text-black text-4xl md:text-7xl font-bold">
              About
            </h1>
          </div>
        </div>
        <div className="flex items-center w-screen h-200vh">
          <div>
            <img src={waves} alt="Waves" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-screen bg-[#01b9ff]">
          <h1 className="text-white text-4xl font-bold mb-4">Seabooks</h1>
          <p className="text-white text-lg text-center max-w-xl">
            Welcome to Seabooks, a user-friendly book management website in the
            theme of the sea. Our goal is to provide you with an easy-to-use
            platform to organize and keep track of your personal library.
          </p>
          <p className="text-white text-lg text-center max-w-xl mt-4">
            At Seabooks, we understand the joy of having all your books in one
            place. That's why our website allows you to add your own books,
            creating a virtual collection that you can access anytime, anywhere.
          </p>
          <p className="text-white text-lg text-center max-w-xl mt-4">
            Simplify your book organization and never lose track of your favorite
            reads again. Dive into the world of Seabooks and enjoy the seamless
            experience of managing your books with a touch of sea-inspired
            aesthetics.
          </p>
        </div>
      </>
    );
  }
      

export default About