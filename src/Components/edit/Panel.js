import React from 'react'
import { useDispatch } from 'react-redux';

import { startLogout } from '../../actions/auth';
import { hideSidebar } from '../../actions/ui';


export const Panel = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(
            startLogout()
        );
    }

    return (
        <div className="edit__sidebar-navbar d-flex-between">

            <h3 className="mt-5">
                <i className="far fa-moon"></i>
                <span> Ciudad Sin Techo </span>
            </h3>

            <button
                className="link"
                onClick={handleLogout}
            >
                Logout
            </button>

            <button
                className="edit__sidebar-arrow link"
                onClick={() => dispatch( hideSidebar() )}
            >
                <i className="fas fa-arrow-left"></i>
            </button>

        </div>
    )
}
