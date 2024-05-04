import { Dashboard } from "./components/dashboard/Dashboard"
import Providers from "./components/Providers/Providers"
import {Routes,Route} from "react-router-dom"
import Create from "./components/CreateRegion/Create"
import Navbar from "./components/Navbar/Navbar"
import SubRegions from "./components/subregions/Subregions"
import Buy from "./components/Buy/Buy"
import Files from "./components/Files/Files"
import StorageProvider from "./components/StorageProvider/StorageProvider"
import SellerProvider from './components/SellersInfo/SellersInfo'
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
        <Route path="/buy" element={<Buy />} />


        <Route path="/files" element={<Files />} />
        <Route path="/storageprovider" element={<StorageProvider />} />
        <Route path="/sellers_info" element={<SellerProvider />} />

      </Routes> 


   </>
  )
}

export default App
