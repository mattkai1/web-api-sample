Alexa.create()
    .then(({alexa, message}) => {
        document.getElementById("content").innerText = "Alexa is ready to go!";
    })
    .catch((error) => {
        document.getElementById("content").innerText = "Alexa failed to initialize!" + JSON.stringify(error);
    });
