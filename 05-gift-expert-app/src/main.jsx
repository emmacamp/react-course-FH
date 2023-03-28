import ReactDOM from 'react-dom/client'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'


import './styles.css'
import GifExpertApp from './GifExpertApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
)
