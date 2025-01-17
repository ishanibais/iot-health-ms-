// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBSbuwdEwP_SSOBhdmiiwfJiHQ8NU_wQ0w",
    authDomain: "sg-project-trial.firebaseapp.com",
    databaseURL: "https://sg-project-trial-default-rtdb.firebaseio.com",
    projectId: "sg-project-trial",
    storageBucket: "sg-project-trial.appspot.com",
    messagingSenderId: "319429089870",
    appId: "1:319429089870:web:afb35693173a866a2e011f",
    measurementId: "G-R1Z1P5G3DE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var plug = "off";
/*
//--------Method 1-------/

// Get Elements
const preObject = document.getElementById('object');

//Create references
const dbRefObject = firebase.database().ref().child('object');

//Sync object changes 
dbRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 3)
});
*/

//--------Method 2--------/

var database = firebase.database();

//-----switching on/off------/
function control() {
    if (plug == "off") {

        plug = "on";
        firebase.database().ref('object').update({
            switch: plug
        })
    } else {
        plug = "off";
        firebase.database().ref('object').update({
            switch: plug
        })
    }
}
document.getElementById('ctrl').onclick = control;
//     //console.log('update');
//     firebase.database().ref('object').update({
//         switch: "on"
//     });
// }


//---------retrieving the data-------/
var readref = firebase.database().ref('object');
readref.on('value', (snapshot) => {
    document.getElementById('temp').innerHTML = snapshot.val().temperature;
    document.getElementById('pulrat').innerHTML = snapshot.val().pulserate;
});