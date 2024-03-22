import { BsChevronCompactLeft, BsChevronCompactRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx';
import { useState } from "react";
import projects from "../data/projectsData";

interface GreetingList {
    projects: {
        id: string,
        title: string,
        description: string,
        image: string,
        url: string
    }[]
}

const GreetingPage: React.FC<GreetingList> = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === projects.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToProject = (projectIndex: number) => {
        setCurrentIndex(projectIndex);
    }

    return (<>
        <html className="max-w-[100vw] min-h-screen bg-[#333131] font-sans text-white">
            <main className="flex mr-20 py-10 justify-between portrait:flex-col ">
                <section className="flex flex-col mx-12 justify-center w-[30vw] h-screen font-bold gap-0 desktop:gap-5"  >
                    <p className="portrait:text-6xl my-4 rotated:text-4xl rotated:my-2 desktop:text-6xl desktop:my-4">Hi,</p>
                    <p className="portrait:text-6xl portrait:my-4 rotated:text-4xl rotated:my-2 desktop:text-6xl desktop:my-4">I'm Krystian,</p>
                    <p className="portrait:text-6xl portrait:my-4 rotated:text-4xl rotated:my-2 desktop:text-6xl desktop:my-4">frontend developer</p>
                    <p className="portrait:text-4xl portrait:my-4 rotated:text-4xl rotated:my-2 desktop:text-6xl desktop:my-4">JavaScript / React</p>
                    <div className="flex">
                        <a className="mr-10" href="https://github.com/starrkTheDev">
                            <BsGithub size={40} />
                        </a>
                        <a href="https://www.linkedin.com/in/krystian-kaczorek-43a9121b5/">
                            <BsLinkedin size={40} />
                        </a>
                    </div>
                </section>
                <section className="text-center h-screen flex items-center 
                portrait:ml-14 portrait:h-[50vh] portrait:mb-24">
                    <div className="flex flex-col items-center text-xl"
                        key={projects[currentIndex].id}
                        id={projects[currentIndex].id}>
                        <p className="text-2xl landscape:text-xl">{projects[currentIndex].title}</p>
                        <p className="text-2xl landscape:text-lg my-2">{projects[currentIndex].description}</p>
                        <div className="relative flex flex-col justify-center items-center">
                            <a href={projects[currentIndex].url}>
                                <img className="w-[50vw] h-[35vw] max-w-[800px] max-h-[450px] rounded-2xl shadow-bs 
                                portrait:w-[70vw] portrait:h-[55vw]
                                landscape:w-[40vw] landscape:h-[25vw] "
                                    alt="project"
                                    src={projects[currentIndex].image} />
                            </a>
                            <div className="absolute top-1/2 left-[-10%] translate-y-[-50%] cursor-pointer portrait:left-[-10%] desktop:left-[-7%]">
                                <BsChevronCompactLeft onClick={prevSlide} size={30} />
                            </div>
                            <div className="absolute top-1/2 right-[-10%] translate-y-[-50%] cursor-pointer portrait:right-[-10%] desktop:right-[-7%]">
                                <BsChevronCompactRight onClick={nextSlide} size={30} />
                            </div>
                            <div className="flex justify-center cursor-pointer mt-4 gap-4">
                                {projects.map((project, projectIndex) => (
                                    <div
                                        key={projectIndex}
                                        onClick={() => goToProject(projectIndex)}
                                    >
                                        <RxDotFilled size={40} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div >
                </section>
            </main>
        </html>
    </>
    )
}

export default GreetingPage;