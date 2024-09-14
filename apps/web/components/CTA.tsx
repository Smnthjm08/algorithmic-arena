import { Button } from "@repo/ui/button";

export function CTA() {
  return (
    <section className="bg-white dark:bg-[#020817] py-6 md:py-10">
      <div className="relative flex flex-col md:flex-row items-center text-center md:text-left gap-6 max-w-[1024px] mx-auto p-6 md:p-8 border-[1px] rounded-xl bg-gradient-to-t dark:from-[#020817] dark:to-[#0F172A]">
        <div className="flex flex-col md:w-1/2 text-start gap-4">
          <div className="text-l md:text-xl font-bold">
            Ready to Elevate Your <span className="text-blue-500">Coding Skills?</span>
          </div>
          <div className="text-gray-600 text-lg dark:text-gray-400">
            Dive into a world of challenging contests, extensive problem libraries, and real-time leaderboards. Whether you’re aiming to sharpen your skills or compete against the best, Algorithmic Arena is your platform for growth and achievement.
          </div>
          <Button className="p-2 w-[90px] h-[40px] border-[1px] rounded-s bg-[#4E7AFF]">
            Join Now
          </Button>
        </div>
        <div className="flex-grow"></div>
        <img className="absolute w-[240px] h-[240px] right-[30px] bottom-0" src="a2.svg" alt="a2"/>
      </div>
    </section>
  );
}
