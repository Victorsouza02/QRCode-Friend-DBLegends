loadIds();

document.querySelector("#create").addEventListener("click", (e)=>{
    saveIds();
    createCodes();
    document.querySelector("#create").innerHTML = "Created - Click to create again";

});




function createCodes(){
        let date = new Date;

        // CLEAR QR CODE
        for (let index = 1; index <= 4; index++) {
            document.querySelector("#qrcode"+index).innerHTML= "";
        }

        // MAKE NEW QR CODE
        for (let index = 1; index <= 4; index++) {
            if (document.querySelector("#id"+index).value != ""){
                let time = date.getTime() + 5184000000;
                console.log(time);
                var qrcode = new QRCode("qrcode"+index, {
                    text: document.querySelector("#id"+index).value +"." + time,
                    width: 256,
                    height: 256,
                    colorDark: "black",
                    colorLight: "white",
                    correctLevel : QRCode.CorrectLevel.H
                });
            } 
        }
}

function saveIds() {
    for (let index = 1; index <= 4; index++) {
        localStorage.setItem("id"+index, document.querySelector("#id"+index).value);
    }
}

function loadIds() {
    for (let index = 1; index <= 4; index++) {
        document.querySelector("#id"+index).value = localStorage.getItem("id"+index);
    }
}