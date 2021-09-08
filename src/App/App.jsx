import "./App.scss";
import { Route, Switch } from "react-router-dom";
import routes from "../Routes/Routes";
import { ToastProvider } from "react-toast-notifications";

const App = () => {
  return (
    <ToastProvider autoDismiss={true} newestOnTop={true}>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
    </ToastProvider>
  );
};

export default App;
