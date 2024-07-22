import { Link } from "react-router-dom";

function Veronica() {
    return (
        <>
            <h1>Véronica</h1>
            <p>Cette page sera prochainement complétée une fois que la refonte de l'API sera finalisée. En attendant, vous pouvez visiter le dépôt Github du projet si vous avez envie d'avoir des informations plus détaillée :</p>
            <Link to={"https://github.com/Zratex/Veronica"}><button>Github</button></Link>
        </>
    )
}

export default Veronica;