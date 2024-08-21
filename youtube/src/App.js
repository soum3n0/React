import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import VideoScreen from './components/VideoScreen';

// Header
// Body
//  - SideBar
//  - MainContainer
//    - ButtonList
//    - VideoContainer
//      - VideoCard


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        children: [
            {
                path: "/",
                element: <MainContainer />
            },
            {
                path: "/watch",
                element: <VideoScreen />,
            }
        ]
    }
])

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <RouterProvider router={appRouter} />
            </div>
        </Provider>
    );
}

export default App;
