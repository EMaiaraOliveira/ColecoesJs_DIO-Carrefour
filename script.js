function getAdmins(map){
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

console.log(getAdmins(usuarios));