import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css';
//import Login from '../views/login';
//import CadastroUsuario from '../views/cadastroUsuario';
import '../custom.css';
import Rotas from './rotas';
import Navbar from '../components/navbar';

class App extends React.Component {
 
 render () {

   return (
         <>
      <Navbar/>
      <div className="container">
            {/** 
             <Login/>
             <CadastroUsuario/>
             */
            }
           <Rotas/>
      </div>
      </>
      )
   
 }
}

export default App;
