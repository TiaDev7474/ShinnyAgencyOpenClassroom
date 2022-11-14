import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';

import Error from './Components/Error';
import Results from './pages/Results';
import Freelances from './pages/Freelances';
import Survey from './pages/Survey';
import GlobalStyle from './utils/style/GlobalStyle';
import {ThemeProvider,SurveyProvider} from '../src/utils/Context'
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <ThemeProvider>
        <SurveyProvider>
        <GlobalStyle/>
        <Header/>
      
          <Routes>
              <Route path='/'element={<Home/>}/>
                    
              <Route path='/survey/:questionNumber' element={<Survey/>}/>
              
              <Route path='/Results' element={<Results/>}/>
              <Route path='/freelances' element={<Freelances/>}/>
              <Route path="*" element={<Error/>}/>
          </Routes>
      
      
       
        </SurveyProvider>
        </ThemeProvider>
    </Router>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
