var person = {
    name: "Tomas",
    lastname: "Macchi",
    phone: "3794-658844",
    dni: 39862225
}

function validationName(){
    var firtsName  = document.getElementById("firstname").value
    var regex = /^[a-zA-Z]{2,10}$/

    if(!regex.test(firtsName)){
        document.getElementById('firstnameprompt').style.color ="red";
        document.getElementById('firstnameprompt').innerHTML = 'Enter 2-10 characteres'
    }
    else{
        document.getElementById('firstnameprompt').style.color ="green";
        document.getElementById('firstnameprompt').innerHTML = 'Approved'
    }
}

function validationLastName(){
    var lastName  = document.getElementById("lastname").value
    var regex = /^[a-zA-Z]{2,20}$/
    
    if(!regex.test(lastName)){
        document.getElementById('lastnamepromp').style.color ="red";
        document.getElementById('lastnamepromp').innerHTML = 'Enter 2-20 characteres'
    }
    else{
        document.getElementById('lastnamepromp').style.color ="green";
        document.getElementById('lastnamepromp').innerHTML = 'Approved'
    }
}

function validationPhone(para){
    var number  = document.getElementById("phone").value
    var regex = /^\d{4}-\d{6}$/ 
    
    if(!regex.test(number)){
        document.getElementById('phoneprompt').style.color ="red";
        document.getElementById('phoneprompt').innerHTML = "Enter 10 characteres. Don't forget '-' sight" 
    }
    else{
        document.getElementById('phoneprompt').style.color ="green";
        document.getElementById('phoneprompt').innerHTML = 'Approved'
    }
}

function validationDNI(para){
    var dniNum  = document.getElementById("dni").value
    var regex = /^[1-9]{8}$/gm
    
    if(!regex.test(dniNum)){
        document.getElementById('dniprompt').style.color ="red";
        document.getElementById('dniprompt').innerHTML = "Enter 8 characteres." 
    }
    else{
        document.getElementById('dniprompt').style.color ="green";
        document.getElementById('dniprompt').innerHTML = 'Approved'
    }
}

function clearValues(){
    document.getElementById('results').innerHTML = ''
}

function CheckPerson() {

    var name = document.getElementById("firstname").value
    var lastName = document.getElementById("lastname").value
    var phoneNumber = document.getElementById("phone").value
    var dni = document.getElementById("dni").value

    if(person.name == name && person.lastname == lastName && person.phone == phoneNumber && person.dni == dni)
        alert(`You are in the system !`)
    else
        alert(`Never been here before!`)
}

