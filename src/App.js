import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetup";
import NewMeetupsPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNav from "./componens/layout/MainNav";

function App() {
  return (
    <div>
      <MainNav />
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupsPage />
        </Route>
        <Route path='/favorite'>
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
