import { Link } from "react-router-dom";

function MainNav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>New Meetups</Link>
          </li>
          <li>
            <Link to='/favorite'>My Fovorite</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default MainNav;
