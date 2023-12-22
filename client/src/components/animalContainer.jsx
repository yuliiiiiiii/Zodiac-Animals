import '../styles/animalContainer.scss'
import Header from './header'
import AnimalList from './animalList'
import AiStory from './aiStory';

const AnimalContainer = () => {
  return (
    <div className='container'>
      <Header />
      <AnimalList />
      <AiStory />
    </div>
  )
}

export default AnimalContainer

