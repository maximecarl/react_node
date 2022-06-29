import { Link } from "react-router-dom";
import Base from "./Base";

const NoPage = () => {
    return <Base title=':('>
        <div className="app_no-page-message">
            <p>Aucune page n'a été trouvée.</p>
        </div>
        <Link to='/'>
            <button className="app_button-icon">
                <i className="fa fa-home"></i> <span>Retour à l'accueil</span>
            </button>
        </Link>
    </Base>;
};
  
export default NoPage;