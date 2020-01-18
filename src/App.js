import React from 'react';
import Layout from "./hoc/Layout/Layout";
import MainPage from "./components/MainPage/MainPage";


function App() {
    return (
        <div className="App">
          <Layout>
            <MainPage/>
          </Layout>
        </div>
    );
}

export default App;
