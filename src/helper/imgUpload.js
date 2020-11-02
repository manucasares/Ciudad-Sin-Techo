import Swal from "sweetalert2";


export const imgUpload = async( img ) => {

    const url = 'https://api.cloudinary.com/v1_1/dbs2h5aay/upload';

    const formData = new FormData();
    
    formData.append('upload_preset', 'ciudad-sin-techo');
    formData.append('file', img);


    try {   
        const res = await fetch( url, {
            method: 'POST',
            body: formData
        })

        if ( res.ok ) {
            const response = await res.json();
            return response.secure_url;
        }
        
    } catch (err) {

        Swal.fire( '', 'Hubo un error, intentelo más tarde.', 'error');

        console.log(err);

    }
}
