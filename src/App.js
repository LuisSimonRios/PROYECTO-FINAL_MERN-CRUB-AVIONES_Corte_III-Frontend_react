import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import routes from './config/routes';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index)=>(
            <Route
              key= {index}
              path={route.path}
              element={
                <route.layout>
                  <route.page />
                </route.layout>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;