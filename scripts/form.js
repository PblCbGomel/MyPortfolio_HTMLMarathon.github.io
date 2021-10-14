function writeToFile() { 
    var name = document.getElementById("fio");
    var email = document.getElementById("email");
    var text = document.getElementById("text");

    alert("ФИО: " + name.value + "\nПочта: " + email.value + "\nСообщение: " + text.value);

    location.replace('#');
    location.reload();
}

function discordLink() {
    navigator.clipboard.writeText("Envy#8637");
    alert("Ссылка временно не работает :(\nАйди дискорда скопировано в буфер обмена: Envy#8637");
}