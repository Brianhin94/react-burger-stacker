import logo from './logo.svg';
import './App.css';
import IngredientList from './IngredientList';
import BurgerPlate from './BurgerPlate';

class App extends Component {
  render() {
    return (
    <main>
    <h1>Burger Stacker</h1>
    <div className='panes'>
    <IngredientList />
    <BurgerPane />
    </div>
    </main>
    )
  }
}



export default App;