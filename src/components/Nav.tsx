import {NavLink} from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex flex-row">
      <ul className="">
        <li>
          <NavLink to="/skills">Mes compétences</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Me contacter</NavLink>
        </li>
      </ul>
    </nav>
  )
}