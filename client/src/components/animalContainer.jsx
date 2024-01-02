import '../styles/animalContainer.scss'
import Header from './header'
import AnimalList from './animalList'
import AiStory from './aiStory';
import StoryProvider from '../providers/StoryProvider';

const AnimalContainer = () => {
  return (
    <div className='container'>
      <Header />
      <AnimalList />

      <StoryProvider>
        <AiStory />
      </StoryProvider>
    </div>
  )
}

export default AnimalContainer

