import SpinnerPage from "./components/Misc/SpinnerPage"
import RedirectHandler from "./components/RedirectHandler"

const Error = () => {
  return (
    <RedirectHandler>
        <div><SpinnerPage /></div>
    </RedirectHandler>
  )
}

export default Error