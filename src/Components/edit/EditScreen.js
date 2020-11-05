import React from "react";
import { useSelector } from "react-redux";

import { EditArticleScreen } from "./EditArticleScreen";
import { NothingSelected } from "./NothingSelected";
import { Sidebar } from "./Sidebar";



export const EditScreen = () => {

    const { active } = useSelector( state => state.crud );
    const { showSidebar } = useSelector( state => state.ui );


    return (
        <div
            className={
                showSidebar ? "d-flex-between" : "edit__active d-flex-between"
            }
        >
            <Sidebar />

            <main className="edit__main">
                {
                    (active)
                        ? <EditArticleScreen  />
                        : <NothingSelected  />
                }
            </main>
        </div>
    );
};
