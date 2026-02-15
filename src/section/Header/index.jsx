import fileResume from '../../assets/cv.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowsDownToLine } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='text-3xl text-primaryTitle'>Suriya Pinitkan</div>
            <div className='text-primaryAccent font-semibold'>Software Developer · between jobs</div>
            <div className='text-sm w-5/6'>From concept to reality, bridging the gap with code, transforming ideas into tangible digital solutions.</div>
            <div className='mt-4'>
                <a href={fileResume} target='_blank'>
                    <span className='rounded-md bg-primaryTitle text-white py-2 px-4'>
                        View Resume
                        <span className='rotate-90 inline-block ml-2 text-sm'>
                            <FontAwesomeIcon className='animate-bounce' icon={faArrowsDownToLine} />
                        </span>
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Header;