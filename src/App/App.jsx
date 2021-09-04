import "./App.scss";
import { Route, Switch } from 'react-router-dom';
import routes from '../Routes/Routes';
const App = () => {
  return (
    <Switch>
      {
        routes.map((route, index) => (
          <Route key={index} {...route}/>
        ))
      }
    </Switch>
  );
};

export default App;
