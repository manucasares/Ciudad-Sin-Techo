import { getArticleById } from "../selectors/getArticleById";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";



export const compareChanges = (arts, active) => {

    const initialActiveState = getArticleById(arts, active.id);
                
    if( !initialActiveState || JSON.stringify(active) !== JSON.stringify(initialActiveState) ) {
        
        Swal.fire({
            title: 'Hay cambios sin guardar!',
            text: 'Si salis sin guardar los cambios se borrarán permanentemente.',
            icon: 'warning',
            showConfirmButton: true,
            confirmButtonText: 'Salir',
            showCancelButton: true,
            allowOutsideClick: false
        }).then( (res) => {
            if( res.isConfirmed ) {
                return true;
            } else {
                return false;
            }
        })
    } 
}