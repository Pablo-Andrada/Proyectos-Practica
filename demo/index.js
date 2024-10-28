const addUserButton = document.getElementById("addUserButton");

let i = 1;

class User {
    constructor(id,name,username,email) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
    }
}
class Repository{
    constructor() {
        this.users=[]
    }
    createUser({id,name,username,email}) {
        const newUser = new User(id, name, username, email);
        this.users.push(newUser);
    }
}

const repository = new Repository();

refresh = () => {
    const usersContainer = document.getElementById("usersContainer");
    usersContainer.innerHTML = "";

    const users = repository.users;

    const htmlUsers = users.map((user) => {
        const name = document.createElement("h3");
        const email = document.createElement("p");
        const username = document.createElement("p");

        name.innerHTML = user.name;
        email.innerHTML = user.email;
        username.innerHTML = user.username;

        const card = document.createElement("div");
        card.appendChild(name);
        card.appendChild(email);
        card.appendChild(username);

        return card;
    })
    htmlUsers.forEach((card) => {
        usersContainer.appendChild(card);
    })

};

const addUser = () => {
    if (i > 10) return alert("No hay mas usuarios");
    $.get(`https://jsonplaceholder.typicode.com/users/${i}`, (data, status) => {
        i++;
        repository.createUser(data);
        refresh();
        
    });
};

addUserButton.addEventListener("click", addUser);