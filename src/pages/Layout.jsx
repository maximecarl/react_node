import { 
    Outlet, 
    Link,
    useMatch,
    useResolvedPath 
} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <aside className="app_menu">
                <img width="50px" height="50px" alt=""/>
                <nav role="navigation" className="app_menu-links">
                    <ul>
                        <li>
                            <MenuLink to="/">
                                <i className="fa fa-home"></i>
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