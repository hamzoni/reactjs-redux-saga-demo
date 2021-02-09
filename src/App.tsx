import React from "react";
import "./App.css";
import { UserTableComponent } from "./components/User/user-table";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <UserTableComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
