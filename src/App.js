import { Route ,Switch} from "react-router-dom";
import Layout from "./Layout/Layout";
import routes from "./routes";
function App() {
  return (
    <Layout>
      <Switch>
      {routes.map((route,index) => (
        <Route {...route} key={index} />
      ))}
      </Switch>
    </Layout>
  );
}

export default App;
