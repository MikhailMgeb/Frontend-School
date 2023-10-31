import { openKey, secretKey, headField } from './keysApi.js';

const conversionInput = document.querySelector('.conversion__input')
const conversionButton = document.querySelector('.conversion__button')


conversionButton.addEventListener('click', () => {
    fetch('https://api.ilovepdf.com/v1/auth', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(headField),
    })
        .then((response) => response.json())
        .then((data) => {

            const bearerToken = data.token;

            return fetch('https://api.ilovepdf.com/v1/start/htmlpdf', {
                headers: {
                    'Authorization': `Bearer ${bearerToken}`,
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    const requestServer = data.server;
                    const requestTask = data.task;

                    fetch(`https://${requestServer}/v1/upload`, {
                        method: "POST",
                        headers: {
                            'Authorization': `Bearer ${bearerToken}`,
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            "task": requestTask,
                            "cloud_file": conversionInput.value,
                        })
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            const serverFilename = data['server_filename'];

                            fetch(`https://${requestServer}/v1/process`, {
                                method: "POST",
                                headers: {
                                    'Authorization': `Bearer ${bearerToken}`,
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    'task': requestTask,
                                    'tool': 'htmlpdf',
                                    'files': [
                                        {
                                            'server_filename': serverFilename,
                                            'filename': 'server.pdf',
                                        }
                                    ]
                                })
                            })
                                .then((response) => response.json())
                                .then(() => {
                                    fetch(`https://${requestServer}/v1/download/${requestTask}`, {
                                        headers: {
                                            'Authorization': `Bearer ${bearerToken}`,
                                        },
                                    })
                                        .then(response => response.blob())
                                        .then(blob => {
                                            const url = URL.createObjectURL(blob);
                                            const link = document.createElement('a');
                                            link.style.display = 'none';
                                            link.href = url;

                                            link.download = 'document.pdf';
                                            document.body.appendChild(link);
                                            link.click();
                                            window.URL.revokeObjectURL(url);
                                        });
                                })
                        })
                })
        })
})