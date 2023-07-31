$(document).foundation()

//Garima's Code//
function revealTopic(btnElementId, topicElementId) {

    //Check the button label
    $("#" + btnElementId).text() == "Read More" ? $("#" + btnElementId).text("Read Less") : $("#" + btnElementId).text("Read More");

    //Toggle the content
    $("#" + topicElementId).fadeToggle();
}


//Mankeerat's Code//
let threads = [
    {
        title: 'Discussion 1',
        type: 'Discussion',
        content: 'This is my discussion post about something',
        datePosted: '2020',
        location: '',
    },
    {
        title: 'Discussion 2',
        type: 'faq',
        content: 'Another posting about something different',
        datePosted: '2019',
        location: '',
    },
    {
        title: 'Discussion 3',
        type: 'Discussion',
        content: 'Another posting about something different',
        datePosted: '2018',
        location: '',
    }
]



function hide(threads) {
    if (threads.type === 'faq') {
        getElementByTagName(article).classList.add('faq')
    } else {
        getElementByTagName(article).classlist.add('discussion')
    }
};




function discussionCard(card) {
    return `
    <article class=" post cell preview-card large-8 medium-12 small-12">
        <a href="https://www.google.com/webhp?hl=en&ictx=2&sa=X&ved=0ahUKEwj9gpbc17eAAxWxlIkEHbfcCQk4FBA9CAk">
          <h2>${card.title}</h2>
        </a>
        <p>${card.content}</p>
    </article>
    `
};


document.getElementById('preview-card-display').innerHTML =
    `
${threads.map(discussionCard).join('')};
`

$('#checkbox12').on('click', () => {
    $('.discussion').toggle();
});



//Prasannas Code//
function revealTopic(btnElementId, topicElementId) {

    //Check the button label
    $("#" + btnElementId).text() == "Read More" ? $("#" + btnElementId).text("Read Less") : $("#" + btnElementId).text("Read More");

    //Toggle the content
    $("#" + topicElementId).fadeToggle();
}

// Function to open the modal
function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Find all elements with class "button" and add a click event listener
var buttons = document.querySelectorAll(".button");
buttons.forEach(function (btn) {
    btn.onclick = function () {
        openModal();
    };
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    closeModal();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
};



