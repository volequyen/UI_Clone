import { Fragment } from "react";
import React from "react";
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { publicRoute } from "~/routes";
import { DefaultLayout } from '~/components/Layout';
function App() {
  return (
   <Router>
      <div className="App">
        <Routes>
          {publicRoute.map((route, index) =>{
            const Layout = route.layout === null ? Fragment : DefaultLayout;
            const Page = route.component;
            return <Route 
                    key = {index}  
                    path={route.path} 
                    element={
                        <Layout>
                          <Page/>
                        </Layout>
                    }
                  />
          })}
        </Routes>
      </div>
   </Router>
  );
}

export default App;
