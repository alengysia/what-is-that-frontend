import { Link } from "react-router-dom";

function Main(props) {




  return (
    <nav className="nav">
      <Link to="/">
        <div>This is the Main component</div>
      </Link>
    </nav>
  );
}

export default Main;