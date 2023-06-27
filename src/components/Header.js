import React from 'react' //imr
import {Link} from 'react-router-dom'

const Header = () => { //sfc
  return ( 
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between '>
          <div className='container'>
            <h1>
              <Link to={'/'} className='text-light'>
                  CRUD - React, Redux, Rest API & AXIOS
              </Link>
            </h1>

            <Link
              className='btn btn-danger nuevo-post d-block d-md-inline-block' 
              to={'/productos/nuevo'}>
              Agregar Producto &#43;
            </Link>
          </div>
      </nav>
   );
}
 
export default Header ;
