import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          {/* text */}
          <div className="text-center xl:text-left font-chakraPetch order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br />
              <span className="text-accent">Haikal Putra</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white">
              Innovative Web Developer with Expertise in PHP, JavaScript,
              Laravel, Node.Js, Angular and Cutting-Edge Technologies, Creating
              Seamless Experiences from Concept to Execution.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a href="https://drive.google.com/drive/folders/1fRjXRuy0kw3wIW_rMNzNqLg0z4YKfqDU?usp=sharing">Download CV</a>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
