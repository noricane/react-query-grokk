import SpinnerPage from "../components/Misc/SpinnerPage"
import RedirectHandler from "../components/RedirectHandler"

const Error = () => (
    <RedirectHandler>
        <SpinnerPage />
    </RedirectHandler>
);



export default Error