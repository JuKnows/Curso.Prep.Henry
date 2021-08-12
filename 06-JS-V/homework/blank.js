
/*
var usuario = {
    posts : [
        post = {
            likes : 10
        },
        post = {
            likes : 6
        },
        post = {
            likes : 2
        }
    ]
};
console.log(usuario.posts[0].likes);
return

*/

function Usuario(nombre, github) {
    this.nombre = nombre;
    this.github = github;
}
Usuario.prototype.introduccion = function(){
    return 'Mi nombre es ' + this.nombre + ', mi usuario de Github es ' + this.github + '.';
}
console.log(typeof(Usuario.prototype))