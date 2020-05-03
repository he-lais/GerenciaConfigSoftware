var firebaseConfig = {
    apiKey: "AIzaSyBQDsy-LKD4glxFqmZ8Xl3zeTK-nb0JuNg",
    authDomain: "receitas-web.firebaseapp.com",
    databaseURL: "https://receitas-web.firebaseio.com",
    projectId: "receitas-web",
    storageBucket: "receitas-web.appspot.com",
    messagingSenderId: "682540538905",
    appId: "1:682540538905:web:139d4548cdc8fad4489e88"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var ref = database.ref('Receitas');
ref.on('value', getValue, error);

function getValue(data){
    console.log(data.val());
}

function error(err){
    console.log("Erro ao obter dados: " + err);
}

