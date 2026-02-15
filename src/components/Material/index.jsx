import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
const Material = ({icon, link }) => {
    return (
        
            <a href={link} target="_blank" className="hover:scale-110"><FontAwesomeIcon icon={icon} /></a>
      
    )
}

export default Material;