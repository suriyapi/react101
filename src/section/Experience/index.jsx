import { faGit, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picExp from '../../assets/Expic1.png'
import picExp2 from '../../assets/Expic2.png'
import { useState } from "react";
const Experience = () => {
    const [isMouseEnter, setIsMouseEnter] = useState(false);

    return (
        <div className="">
            <div className="text-primaryAccent font-medium">Experience</div>
            <div className={`grid grid-cols-[25%_75%]  rounded px-2 py-6 transition-all ${isMouseEnter['exp1'] ? "bg-gray-400" : ""}`}
                onMouseEnter={() => setIsMouseEnter({ 'exp1': true })}
                onMouseLeave={() => setIsMouseEnter({ 'exp1': false })}
            >
                <div>
                    <span className={`text-sm ${isMouseEnter['exp1'] ? "text-primaryAccent" : ""}`}>
                        2024-202
                    </span>
                    <div>
                        <img src={picExp} className="w-5/6 rounded-md border-2 border-primarySubcontent" />
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className={`text-primaryAccent ${isMouseEnter['exp1'] ? "text-primaryAccent" : ""}`}>Fullstack</div>
                    <div className="flex gap-4 text-xl">
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <div className="text-sm">Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers.</div>
                    <div className="flex gap-4 text-sm">
                        <div className={`rounded-md bg-primarySubcontent px-4 py-1 ${isMouseEnter ['exp1'] ? "text-primaryAccent" : ""}`}>React</div>
                        <div className={`rounded-md bg-primarySubcontent px-4 py-1 ${isMouseEnter ['exp1'] ? "text-primaryAccent" : ""}`}>Next</div>
                    </div>
                </div>
            </div>

            <div className={`grid grid-cols-[25%_75%]  rounded px-2 py-6 transition-all ${isMouseEnter ['exp2'] ? "bg-gray-400" : ""}`}
                onMouseEnter={() => setIsMouseEnter({ 'exp2': true })}
                onMouseLeave={() => setIsMouseEnter({ 'exp2': false })}
            >
                <div>
                    <span className={`text-sm ${isMouseEnter ['exp2'] ? "text-primaryAccent" : ""}`}>
                        2024-202
                    </span>
                    <div>
                        <img src={picExp2} className="w-5/6 rounded-md border-2 border-primarySubcontent" />
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className={`text-primaryAccent ${isMouseEnter['exp2'] ? "text-primaryAccent" : ""}`}>Fullstack</div>
                    <div className="flex gap-4 text-xl">
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <div className="text-sm">Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers.</div>
                    <div className="flex gap-4 text-sm">
                        <div className={`rounded-md bg-primarySubcontent px-4 py-1 ${isMouseEnter ['exp2'] ? "text-primaryAccent" : ""}`}>React</div>
                        <div className={`rounded-md bg-primarySubcontent px-4 py-1 ${isMouseEnter ['exp2'] ? "text-primaryAccent" : ""}`}>Next</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experience;