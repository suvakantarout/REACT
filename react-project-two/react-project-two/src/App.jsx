import UserCard from "./components/UserCard"
import "./App.css"
import Red_ferrari from "./assets/Red_ferrari.jpg"
import Gray_ferrari from "./assets/Gray_ferrari.jpg"
import Sky_ferrari from "./assets/Sky_ferrari.jpg"

function App() {

  return (
    <div className="container">
      <UserCard name="Ferrari Roma" desc="Desc1" image={Red_ferrari} />
      <UserCard name="Ferrari" desc="Desc2" image={Gray_ferrari} />
      <UserCard name="Ferrari 296GTS" desc= "Desc3" image={Sky_ferrari}/>
    </div>
  )
}

export default App
