import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquareYoutube } from '@fortawesome/free-brands-svg-icons'
import { faGit } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div className='flex items-end gap-2 text-2xl '>
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faSquareInstagram} />
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faSquareYoutube} />
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faGit} />
        </div>
    )
}
export default Contact