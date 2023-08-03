
/*class chatWindow{
    constructor(message,room,username){
        this.message = message;
        this.room = room;
        this.username = username;
    }
}
*/


const chat = {
    message: "",
    room: "general",
    username: "Timi",
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()).toDate().toLocaleString(),
};

addChats = text => {
    html = `<li>${text}</li>`;
    chatWindow.innerHTML += html;
}


updateUsername = (text) => {
    chat.username = text;
    html='Your username has been updated';
    updateMessage.innerHTML+=html;
    setTimeout(function() {
        updateMessage.removeChild(updateMessage.firstChild) 
    }, 3000);
}


