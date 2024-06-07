export async function inicializarcamara() {
    //const constraints = {
    //    video: true
    //};

    //const video = document.getElementById('video');
    //const stream = await navigator.mediaDevices.getUserMedia(constraints);
    //video.srcObject = stream;

    const constraints = {
        video: true
    };

    try {
        const video = document.getElementById('video');
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
    } catch (error) {
        console.error('Error al acceder a la cámara: ', error);
        throw error;
    }
}

export function tomarFoto() {
    //const video = document.getElementById('video');
    //const canvas = document.getElementById('canvas');
    //const context = canvas.getContext('2d');

    //canvas.width = video.videoWidth;
    //canvas.height = video.videoHeight;

    //context.drawImage(video, 0, 0, canvas.width, canvas.height);

    //const dataUrl = canvas.toDataURL('image/png');
    //return dataUrl; // Devuelve la URL de la imagen en formato base64
    try {
        const video = document.getElementById('video');
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const dataUrl = canvas.toDataURL('image/png');
        return dataUrl; // Devuelve la URL de la imagen en formato base64
    } catch (error) {
        console.error('Error al tomar la foto: ', error);
        throw error;
    }
}

