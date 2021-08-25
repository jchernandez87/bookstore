import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './components/Nav';
import Books from './components/Books';
import Categories from './components/Categories';
import store from './redux/configuresStore';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
