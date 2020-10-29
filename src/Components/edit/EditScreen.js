import React, { useState } from "react";

import { EditArticleScreen } from "./EditArticleScreen";
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
