

function revealTopic(btnElementId, topicElementId) {

    //Check the button label
    $("#" + btnElementId).text() == "Read More" ? $("#" + btnElementId).text("Read Less") : $("#" + btnElementId).text("Read More");

    //Toggle the content
    $("#" + topicElementId).fadeToggle();
}







