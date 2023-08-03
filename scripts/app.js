const chatWindow = document.querySelector(".chat-window ul");
const form = document.querySelector(".new-chat");
const usernameForm = document.querySelector(".new-name");
const updateMessage = document.querySelector(".update-mssg");
const general = document.querySelector("#general");
const gaming = document.querySelector("#gaming");
const music = document.querySelector("#music");
const business = document.querySelector("#business");

general.addEventListener("click", e => {
    clearList();
    getChats("general");
    chat.room = "general";
})

gaming.addEventListener("click", e => {
    clearList();
    getChats("gaming");
    chat.room = "gaming";

})

music.addEventListener("click", e => {
    clearList();
    getChats("music");
    chat.room = "music";

})

business.addEventListener("click", e => {
    clearList();
    getChats("business");
    chat.room = "business";

})

usernameForm.addEventListener("submit", e => {
    e.preventDefault();
    updateUsername(usernameForm.name.value.trim());
    usernameForm.reset();
})


form.addEventListener("submit", e => {
    e.preventDefault();
    chat.message = form.message.value.trim();
    data.add((chat))
        .then((doc) => {
           // console.log(doc.message, doc.username);
            //addChats(chat.username + ": " + chat.message);
            form.reset();
        })
        .catch((err) => { console.log("oops", err) });
})

data.orderBy("createdAt").onSnapshot((querySnapshot) => {
    querySnapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
            const chatData = change.doc.data();
            if (chatData.room === chat.room) {
                addChats(chatData.createdAt.fromDate(new Date()).toDate().toLocaleString()+" "+ chatData.username + ": " + chatData.message );
            }
        }
    });
});