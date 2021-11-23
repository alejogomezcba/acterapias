function generateCaptcha() {
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','1','2','3','4','5','6','7','8','9','0');
    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
    }
    var code = a + '' + b + '' + '' + c + '' + d + '' + e + '' + f;
    document.getElementById("mainCaptcha").innerHTML = code
}

function CheckValidCaptcha() {
    var string1 = removeSpaces(document.getElementById('mainCaptcha').textContent);
    var string2 = removeSpaces(document.getElementById('txtInput').value);
    string3 = string2.toUpperCase()
    if (string1 == string3) {

        var btnFormCont = document.getElementById('btn-form-cont');
        var btnEnviar = document.createElement('input');
        
        btnEnviar.classList.add('btn-form');
        btnEnviar.classList.add('btn');
        btnEnviar.value='Enviar';
        btnEnviar.type='submit';
        btnEnviar.id='submit';
        btnEnviar.name='submit';
        
        btnFormCont.appendChild(btnEnviar);


        return true;
    } else {
        document.getElementById('error').innerHTML = "Captcha Incorrecto";
        var failMsn = document.getElementById('error');
        failMsn.classList.remove("ocultar");
        setTimeout(function () {
            failMsn.classList.add("ocultar");
        }, 3000);
        //alert("Please enter a valid captcha.");
        return false;

    }
}

function removeSpaces(string) {
    return string.split(' ').join('');
}


document.getElementById('txtInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        CheckValidCaptcha();
        cleartxtInput();
        generateCaptcha();
    }
});




function cleartxtInput(){
    document.getElementById('txtInput').value='';
}

