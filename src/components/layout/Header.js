import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="text-center m-0">
              ¿Qué <img src="/img/Pokemon-Logo1.png" width="150px" alt="" /> pesa más?
              <img src="/img/snorlax.png" width="60px" alt="" />
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
