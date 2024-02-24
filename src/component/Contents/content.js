import React from "react";
import Main from "./Main/main";
import AI from "./AI Pick/ai"

const Content = ( {activeMainContent} ) => {
    return (
        <div>
          {activeMainContent === 'Main' && <Main />}
          {activeMainContent === 'AI' && <AI />}
        </div>
      );
}

export default Content;