function writeToFile() { 
    var name = document.getElementById("fio");
    var email = document.getElementById("email");
    var text = document.getElementById("text");

    alert("ФИО: " + name.value + "\nПочта: " + email.value + "\nСообщение: " + text.value);

    location.replace('#');
    location.reload();
}

function dontWork() {
    alert("Ссылка временно не работает :(");
}