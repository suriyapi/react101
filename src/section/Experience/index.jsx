import { faGit, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picExp from '../../assets/Expic1.png'
import { useState } from "react";
const Experience = () => {
    const [isMouseEnter, setIsMouseEnter] = useState(false);

    return (
        <div className="">
            <div className="text-primaryAccent font-medium">Experience</div>
            <div className={`grid grid-cols-[25%_75%] bg-gray-200 rounded px-2 py-6 ${isMouseEnter ? "bg-gray-400" : ""}`}
                onMouseEnter={() => setIsMouseEnter(true)}
                onMouseLeave={() => setIsMouseEnter(false)}
            >
                <div>
                    <span className={`text-sm ${isMouseEnter ? "text-primaryAccent" : ""}`}>
                        2024-202
                    </span>
                    <div>
                        <img src={picExp} className="w-5/6 rounded-md border-2 border-primarySubcontent" />
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className={`text-primaryAccent ${isMouseEnter ? "text-primaryAccent" : ""}`}>Fullstack</div>
                    <div className="flex gap-4 text-xl">
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <div className="text-sm">Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers.</div>
                    <div className="flex gap-4 text-sm">
                        <div className={`rounded-md bg-primarySubcontent px-4 py-1 ${isMouseEnter ? "text-primaryAccent" : ""}`}>React</div>
                        <div className={`rounded-md bg-primarySubcontent px-4 py-1 ${isMouseEnter ? "text-primaryAccent" : ""}`}>Next</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-[25%_75%]  rounded px-2 py-6">
                <div>
                    <span className="text-sm">
                        2024-2025
                    </span>
                    <div>
                        <img src={picExp} className="w-5/6 rounded-md" />
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className="text-primaryAccent ">Fullstack</div>
                    <div className="flex gap-4 text-xl">
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <div className="text-sm">Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers.</div>
                    <div className="flex gap-4 text-sm">
                        <div className="rounded-md bg-primarySubcontent px-4 py-1 hover:text-primaryTitle">React</div>
                        <div className="rounded-md bg-primarySubcontent px-4 py-1 hover:text-primaryTitle">Next</div>
                        <div className="rounded-md bg-primarySubcontent px-4 py-1 hover:text-primaryTitle">Tailwind</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experience;