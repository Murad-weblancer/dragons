import React from "react";

export const Environment = () => {
  return (
    <div className="environment">
      <h1>Environment</h1>
      <p>
        Let's start from scratch. To create react aplication you need install
        globally <a href="https://nodejs.org">Node.js </a> in your operating
        system. After in Command Propt you need write npx create-react-app `name
        of app`. After you need install all the packages which you need using{" "}
        <a href="https://www.npmjs.com/">npm install</a> or{" "}
        <a href="https://yarnpkg.com/">yarn add</a> Between them there is no
        difference. Use what you like more. Also, don't forget to structure
        files by folders, this will help you write beautiful code and not get
        confused in the application.
      </p>
    </div>
  );
};
