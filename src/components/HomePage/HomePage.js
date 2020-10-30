import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import "./HomePage.scss";
import TableComponent from "../TableComponent/TableComponent";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  return (
    <div className="home-container">
      <nav className="home-header">
        <div className="logo-wrapper">
          <div className="logo">
            TEACH<div id="logo-for">FOR</div>AMERICA
          </div>
        </div>
        <div className="signout-wrapper">
          <AmplifySignOut />
        </div>
      </nav>

      <div className="content-wrapper">
        {/* <aside className="options">
          <div className="open-message-btn-wrapper">
            <Button
              color="primary"
              size="lg"
              onClick={() => setIsModalOpen(true)}
            >
              Message Selected Students ({selected.length})
            </Button>
          </div>
        </aside> */}
        <div className="content-wrapper">
          <TableComponent
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      </div>
    </div>
  );
};

export default withAuthenticator(HomePage);
