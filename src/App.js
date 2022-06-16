import './App.css'
import Header from './component/Header'
import{useState, useEffect} from 'react'
import axios from 'axios'
import Punklist from './component/PunkList'
import Main from './component/Main'

function App() {
  
  const [punkListData, setpunkListData] = useState([])

  const [selectedPunk, setSelectedPunk] = useState(0)

    useEffect(() => {
      const getMyNfts = async () => {
        const openseaData = await axios.get(
          'https://testnets-api.opensea.io/assets?asset_contract_address=0x911516313504eF9423FcCFf755540b5a3857151c&order_direction=asc'
          )

        console.log(openseaData.data.assets)
        setpunkListData(openseaData.data.assets)
      }
      return getMyNfts()
    }, [])

  return (
    <div className='app'>
      
      <Header  />
      {
        punkListData.length > 0 && (
          <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
          <Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk}/>
          </>
        )
      }
     
        


    </div>
  )
}



export default App
