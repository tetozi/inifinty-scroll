import './Error.css'
import {Link} from 'react-router-dom'

const Error = ({
    message
}) => {



   return(
   <div className="modalBackground">
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button
        
        >
          X
        </button>
      </div>
      <div className="title">
        <h1>Something goes wrong !</h1>
      </div>
      <div className="footer">
        <button 
         
          id="cancelBtn"
        ><Link to={`/infinityScroll`}> OK</Link> 
         
        </button>
      </div>
    </div>
  </div>
   )

}


export  default Error