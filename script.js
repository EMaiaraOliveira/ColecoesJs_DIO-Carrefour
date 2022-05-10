/*function getAdmins(map){
    let admins=[];
    for([key, value]of map){
        if( value == 'Admin'){
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('luis', 'Admin');
usuarios.set('Ana', 'Admin');
usuarios.set('Maria', 'User');
usuarios.set('João', 'Admin');
usuarios.set('Cazuza', 'Admin');

console.log(getAdmins(usuarios));*/
const meuArray = [30, 30, 40, 5, 223, 2049, 3049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));