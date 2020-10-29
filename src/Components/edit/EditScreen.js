import React, { useState } from "react";

import { EditArticleScreen } from "./EditArticleScreen";
<<<<<<< HEAD
// import { NothingSelected } from "./NothingSelected";
=======
>>>>>>> b0e9cc065560b4f4f40f6727a52b629ba85d5fbc
import { Sidebar } from "./Sidebar";

export const EditScreen = () => {
    const [sidebarShown, setSidebarShown] = useState(true);

    return (
        <div
            className={
                sidebarShown ? "d-flex-between" : "edit__active d-flex-between"
            }
        >
            <Sidebar setSidebarShown={setSidebarShown}/>

            <main className="edit__main">
                <EditArticleScreen setSidebarShown={setSidebarShown} />

                {/* <NothingSelected /> */}

                {/* {
                    (active)
                    ? (<ArticleScreen />)

                    : (<NothingSelected />)
                } */}
            </main>
        </div>
    );
};
