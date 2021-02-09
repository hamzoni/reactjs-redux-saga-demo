import React from "react";
import "./App.css";
import UserTable from "./components/User/user-table";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <UserTable />
        </div>
      </div>
    </div>
  );
}

export default App;
