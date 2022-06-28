import { Link } from "react-router-dom";
import Base from "./Base";

const NoPage = () => {
    return <Base title=':('>
        <p>Aucune page n'a été trouvée.</p>
        <Link to='/'>
            <button>
                <i className="fa fa-chevron-left"></i> Retour
            </button>
        </Link>
    </Base>;
};
  
export default NoPage;