import React from "react";
import Main from "./Main/main";

const Content = ( {activeMainContent} ) => {
    return (
        <div>
          {activeMainContent === 'Main' && <Main />}
          {/* {activeMainContent === 'AI' && <AI />} */}
        </div>
      );
}

export default Content;