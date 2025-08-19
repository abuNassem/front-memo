import ReactDOM from 'react-dom/client'
import './index.css'
import Approuter from './routes/approuter'

import store from './store/store'
import { Provider } from 'react-redux'
// pages

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
 <Approuter/>
  </Provider>
 
 ,
)