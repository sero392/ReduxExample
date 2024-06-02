import React from "react";
import { Container } from "reactstrap";
import  Navi  from "../navi/Navi.js";
import Dashboard from "./Dashboard.js";
import {Route,Routes} from 'react-router-dom'
import CartDetail from "../cart/CartDetail.js";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct.js";
import NotFound from "../common/NotFound.js";

function App() {
  return (
   <div>
    <Container>
      <Navi>
      </Navi>
      <Routes>
        <Route path="/" exact Component={Dashboard} />
        <Route path="/Cart" exact Component={CartDetail} />
        <Route path="/saveproduct/:productId" Component={AddOrUpdateProduct}></Route>
        <Route path="/saveproduct" Component={AddOrUpdateProduct}></Route>
        <Route path="*" exact Component={NotFound}></Route>
      </Routes>
    </Container>
   </div>
  );
}

export default App;
