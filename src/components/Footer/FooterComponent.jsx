import React from "react";
import { Jumbotron } from "react-bootstrap";

export const FooterComponent = (props) => {
  return (
    <Jumbotron fluid>
      <div classname="row">
        {/*Column*/}
        <h1>Hello, world!</h1>
      </div>
      <div classname="col-md-3 col-sm-6">
        <ul>
          <li>
            Contato
             </li>
        

  
          <li>
            teste
             </li>
        </ul>
      </div>



    </Jumbotron>
  );
};
