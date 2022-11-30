import './MostPopular.css'
import { Card ,SectionHeader,SectionWrapper} from '../../components/index'
import mostPopularData from '../../Data/mostPopularData'

const MostPopular=()=>
{
   
const cards=mostPopularData.map(card=>
{
  return  <Card key={card.id} title={card.title} category={card.category} rate={card.rate} download={card.download} image={card.image}/>


})
return(
    <>
    <SectionWrapper>
   <SectionHeader>Most Popular</SectionHeader>
    <div className='most-popular-items'>
   {cards}
    </div>
    </SectionWrapper>
    </>
)
}
 export default MostPopular;