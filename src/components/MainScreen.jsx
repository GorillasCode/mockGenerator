import ConvertedScreen from "./ConvertedScreen"
import InputScreen from "./InputScreen"

const MainScreen = () => {
  return (
    <div className="container text-center">
        <div className="row">
            <div className="col-sm-6"><InputScreen/></div>
            <div className="col-sm-6"><ConvertedScreen/></div>
        </div>
    </div>
  )
}

export default MainScreen