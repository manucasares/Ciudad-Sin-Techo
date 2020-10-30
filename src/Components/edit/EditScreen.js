import React, { useState } from "react";
import { useSelector } from "react-redux";

import { EditArticleScreen } from "./EditArticleScreen";
import { NothingSelected } from "./NothingSelected";
import { Sidebar } from "./Sidebar";



export const EditScreen = () => {

    const { active } = useSelector( state => state.crud );

    const [sidebarShown, setSidebarShown] = useState(true);

    return (
        <div
            className={
                sidebarShown ? "d-flex-between" : "edit__active d-flex-between"
            }
        >
            <Sidebar setSidebarShown={setSidebarShown}/>

            <main className="edit__main">

                {
                    (active)
                        ? <EditArticleScreen setSidebarShown={setSidebarShown} />
                        : <NothingSelected setSidebarShown={setSidebarShown} />
                }

            </main>
        </div>
    );
};
