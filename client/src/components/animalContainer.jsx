import '../styles/animalContainer.scss'
import Header from './header'
import AnimalList from './animalList'

const AnimalContainer = () => {
  return (
    <div className='container'>
      <Header />
      <AnimalList />
    </div>
  )
}

export default AnimalContainer

