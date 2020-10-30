import { types } from "../types/types"
import Swal from "sweetalert2";

import { firebase } from '../firebase/firebaseConfig';


export const startLoginEmailPassword = ( email, password ) => {
    return ( dispatch ) => {

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( ({user}) => {
                dispatch( login(user.uid) )
            })
            .catch( () => {
                Swal.fire(
                    'Error',
                    'El usuario o contraseña son incorrectos.',
                    'error'
                )
            })
    }
}

export const startLogout = () => {
    return ( dispatch ) => {
        
        firebase.auth().signOut()
            .then( () => {
                dispatch( logout() )
            })
            .catch( () => {
                Swal.fire(
                    'Error',
                    'Algo ha salido mal con tu conexión a internet.',
                    'error'
                )
            });
    }
}


export const login = ( uid ) => ({
    type: types.login,
    payload: {
        uid,
    }
})


export const logout = () => ({
    type: types.logout
})