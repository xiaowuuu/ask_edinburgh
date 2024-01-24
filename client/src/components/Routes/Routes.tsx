import {createBrowserRouter} from 'react-router-dom';
import App from '../../App';
import HomePage from '../HomePage/HomePage';
import History from '../HistoryPage/History';

export const router = createBrowserRouter([
  {
    path: '/',
    element:<App />,
    children: [
      {path: "", element: <HomePage/>},
      {path: "history", element: <History/>}
    ]
  }
])

