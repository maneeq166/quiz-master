import { Link } from "react-router-dom";
import Gk from "../../assets/Gk.png"
import Sk from "../../assets/Sk.png"
import Hc from "../../assets/HC.png"

export function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
        <main className="container mx-auto px-4 py-8">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Quiz Master</h1>
            <p className="text-xl text-gray-600">Challenge yourself and learn something new every day!</p>
          </section>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={Gk}
                alt="Quiz Category 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">General Knowledge</h2>
                <p className="text-gray-600">Test your knowledge on a wide range of topics.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={Sk}
                alt="Quiz Category 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Science & Technology</h2>
                <p className="text-gray-600">Explore the wonders of science and tech innovations.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={Hc}
                alt="Quiz Category 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">History & Culture</h2>
                <p className="text-gray-600">Journey through time and discover world cultures.</p>
              </div>
            </div>
          </div>
  
          <section className="mt-12 text-center">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Ready to Challenge Yourself?</h2>
            <p className="text-xl text-gray-600 mb-6">Join Quiz Master today and start your learning adventure!</p>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-500 transition duration-300"
            >
              Get Started
            </Link>
          </section>
        </main>
      </div>
    )
}