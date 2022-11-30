import './GamingLibrary.css';
import GamingLibraryData from '../../Data/GamingLibraryData';
import { SectionHeader,SectionWrapper,GamingLibraryCard } from '../../components';
const GamingLibrary =()=>
{
    const cards=GamingLibraryData.map(card=>
        {
          return  <GamingLibraryCard key={card.id} title={card.title} category={card.category} currently={card.currently} ours_played={card.ours_played} data_added={card.data_added} image={card.image}/>
        
        
        })
    return(
    <>
    <SectionWrapper>
   <SectionHeader>Gaming Library</SectionHeader>
    <div className='gaming-library-cards'>
  {cards}
    </div>
    </SectionWrapper>
    </>
)}
export default GamingLibrary;