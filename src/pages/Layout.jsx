import { 
    Outlet, 
    Link,
    useMatch,
    useResolvedPath 
} from "react-router-dom";
import icon_site from '../assets/images/icon_site.png';

const Layout = () => {
    return (
        <>
            <aside className="app_menu">
                <Link to='/' className="noPadding">
                    <img width="50px" height="50px" src={icon_site} alt=""/>
                </Link>
                <nav role="navigation" className="app_menu-links">
                    <ul>
                        <li>
                            <MenuLink to="/">
                                <i className="fa fa-home"></i>
                            </MenuLink>
                        </li>
                        <li>
                            <MenuLink to="/conversation">
                                <i className="fa fa-comment"></i>
                            </MenuLink>
                        </li>
                        <li>
                            <MenuLink to="/stats">
                                <i className="fa fa-bar-chart"></i>
                            </MenuLink>
                        </li>
                    </ul>
                </nav>
                <MenuLink to="/settings">
                    <i className="fa fa-cog"></i>
                </MenuLink>
            </aside>

            <Outlet />
        </>
    )
};

const MenuLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
        <Link
          className={ match ? "selected" : "" }
          to={to}
          {...props}
        >
          {children}
        </Link>
    );
  }  

export default Layout;