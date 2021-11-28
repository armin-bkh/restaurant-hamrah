import "./App.scss";
import { useRoutes } from "react-router-dom";
import { routes } from "../Routes/Routes";
import { ToastProvider } from "react-toast-notifications";
import ScrollIndicator from "../Components/Common/ScrollIndicator/ScrollIndicator";
import { useEffect } from "react";
import { getUserData } from "../Redux/User/userActions";
import { useDispatch } from "react-redux";

//yeah

const App = () => {
  const appRoutes = useRoutes(routes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, []);
  return (
    <ToastProvider autoDismiss={true} newestOnTop={true}>
      <ScrollIndicator />
      {appRoutes}
    </ToastProvider>
  );
};

export default App;
