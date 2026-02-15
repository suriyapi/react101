import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const TitleLink = ({isHighlight, title, link}) => {
    if (!link) {
        return (
            <div className={`text-primaryAccent ${isHighlight ? "text-primaryAccent" : ""}`}>
                {title}
            </div>
        )
    }

    return (
        <div className={`text-primaryAccent ${isHighlight ? "text-primaryAccent" : ""}`}>
            <a href={link} target="_blank" >
            {title}
            <FontAwesomeIcon className={`text-xs -rotate-45 transition-all ${isHighlight ? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight} />
            </a>
        </div>
    )
}

export default TitleLink;