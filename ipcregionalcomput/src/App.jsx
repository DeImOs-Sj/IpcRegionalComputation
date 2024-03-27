import { Dashboard } from "./components/dashboard/Dashboard"
import Providers from "./components/Providers/Providers"
import {Routes,Route} from "react-router-dom"
import Create from "./components/CreateRegion/Create"
import Navbar from "./components/Navbar/Navbar"
import SubRegions from "./components/subregions/Subregions"
function App() {

  return (
    <>
      <Navbar/>
     <Routes> 

        <Route path="/" element={<Dashboard />} />
                <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      <Route
          path="/provider"
          element={<Providers />}
        />
          <Route
          path="/create_region"
          element={<Create />}
        />
                <Route path="/subregions" element={<SubRegions />} />

       {/*  <Route path="/subregions" element={<SubRegions />} /> */}
      </Routes> 


   </>
  )
}

export default App
