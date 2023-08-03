const data = db.collection("chats");

getChats = async(room) => {
    (data.orderBy("createdAt").get())
        //returning a promise to get access to the database 
        .then(message => {
            //go through each collection in the database
            message.forEach(element => {
                //go through the data in each collection
                let chataData = element.data();
                if (chataData.room === room) {
                    addChats(chataData.createdAt.fromDate(new Date()).toDate().toLocaleString()+" "+ chataData.username + ": " + chataData.message );
                }
            })
        }).catch(err => {
            console.log(err);
        })
}
function clearList() {

    while (chatWindow.firstChild) {
        chatWindow.removeChild(chatWindow.firstChild);
    }
}

