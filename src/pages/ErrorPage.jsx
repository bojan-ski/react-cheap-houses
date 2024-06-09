import { useRouteError } from "react-router-dom"
// components
import Error404 from "../components/errorPage/Error404"
import Error from "../components/errorPage/Error"

const ErrorPage = () => {
    const error = useRouteError()

    return <div className="error">
        {error.status == 404 ? (
            <Error404 textOne="Stranicu koju tražite ne postoji" textTwo="Molimo Vas da se vratite na početnu stranicu" />
        ) : (
            <Error textOne="Pojavi se problem" textTwo="Molimo Vas da se vratite na početnu stranicu" />
        )}
    </div>
}

export default ErrorPage