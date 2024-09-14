import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Import the right arrow icon

export function Hero() {
  return (
    <section className="bg-white dark:bg-[#020817] py-4 md:py-6">
      <div className="mx-auto px-4 md:px-6 flex flex-col items-center text-center gap-6">
        <div className="flex flex-col gap-3">
          <div className="text-4xl md:text-6xl font-bold">Conquer the Code at</div>
          <div className="text-4xl md:text-6xl text-[#4E7AFF] font-bold">Algorithmic Arena</div>
          <div className="text-base md:text-lg text-gray-600">
            Join elite coders, solve problems, and climb leaderboards at Algorithmic Arena
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
            <button className="border border-gray-600 px-4 py-2 rounded-sm bg-[#4E7AFF] text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Start Solving
            </button>
            <button className="border border-gray-600 px-4 py-2 rounded-md bg-transparent text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center gap-2">
              Explore Features
              <ArrowRight className="h-4 w-4" /> {/* Add the right arrow icon */}
            </button>
          </div>
        </div>
        <div className="mt-6">
          {/* Light Mode Image */}
          <img
            className="block dark:hidden mx-auto"
            src="/HeroSectionLightImage.svg"
            alt="Light mode hero image"
            width={500}  // Adjust width as needed
            height={300} // Adjust height as needed
          />
          {/* Dark Mode Image */}
          <img
            className="hidden dark:block mx-auto"
            src="/HeroSectionDarkImage.svg"
            alt="Dark mode hero image"
            width={500}  // Adjust width as needed
            height={300} // Adjust height as needed
          />
        </div>
      </div>
    </section>
  );
}
