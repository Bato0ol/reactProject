import './GamingLibraryCard.css';
import {SecondaryButton} from '../../components/index';
const GamingLibraryCard=(props)=>
{return(
    <div className='gaming-library-card'>
        <ul>
            <li className='gaming-library-item-image'>
            <img  src={props.image} alt=''/>
            </li>
            <li> <h4>{props.title}</h4><span>{props.category}</span></li>
            <li>
            <h4>Data Added</h4><span>{props.data_added}</span>
            </li>
            <li>
            <h4>OursPlayed</h4><span>{props.ours_played}</span>
            </li>
            <li>
            <h4>Currently</h4><span>{props.currently}</span>
            </li>
<SecondaryButton>Download</SecondaryButton>
        </ul>
    </div>
)}
export default GamingLibraryCard;