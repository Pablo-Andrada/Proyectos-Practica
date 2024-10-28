const addUserButton = document.getElementById("addUserButton");

let i = 1;

const addUser = () => {
    if (i > 10) return alert("No hay mas usuarios");
    $.get(`https://jsonplaceholder.typicode.com/users/${i}`, (data, status) => {
        console.log(data);
        i++;
    });
};

addUserButton.addEventListener("click", addUser);