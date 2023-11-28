import Navbar from "./Component/Navbar"
import NewsBoard from "./Component/NewsBoard"
import {useState} from "react"
const App = () => {
  const [category, setCategory] = useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App
