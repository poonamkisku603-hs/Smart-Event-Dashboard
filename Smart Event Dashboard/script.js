const addBtn = document.getElementById("addBtn");
const container = document.getElementById("eventContainer");
const clearBtn = document.getElementById("clearAll");

// ADD EVENT
addBtn.addEventListener("click", function () {

    const title = document.getElementById("eventTitle").value;
    const date = document.getElementById("eventDate").value;
    const category = document.getElementById("eventCategory").value;
    const desc = document.getElementById("eventDesc").value;

    if (!title || !date || !category) {
        alert("Please fill all fields");
        return;
    }

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h4>${title}</h4>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p>${desc}</p>
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">X</button>
    `;

    container.appendChild(card);

    // Clear fields
    document.getElementById("eventTitle").value = "";
    document.getElementById("eventDate").value = "";
    document.getElementById("eventCategory").value = "";
    document.getElementById("eventDesc").value = "";
});


// EVENT DELEGATION
container.addEventListener("click", function (e) {

    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
    }

    if (e.target.classList.contains("complete-btn")) {
        e.target.parentElement.classList.toggle("completed");
    }

});


// CLEAR ALL EVENTS
clearBtn.addEventListener("click", function () {
    container.innerHTML = "";
});


// TEXT MANIPULATION DEMO
document.getElementById("changeText").addEventListener("click", function () {

    const demo = document.getElementById("demoText");

    console.log("innerText:", demo.innerText);
    console.log("textContent:", demo.textContent);

    demo.textContent = "Text Changed using textContent!";
});
document.addEventListener('keydown',(event)=>{
    const k = document.querySelector('.key')
    if(k){
        k.innerText = "You pressed: " + event.key
    }
})
// ==========================
// SAMPLE EVENTS (Auto Add)
// ==========================
let sampleEvents = [
    {
        title: "Cybersecurity Workshop",
        date: "2026-03-10",
        category: "Workshop",
        desc: "Learn ethical hacking basics."
    },
    {
        title: "AI Seminar",
        date: "2026-03-15",
        category: "Seminar",
        desc: "Future of Artificial Intelligence."
    },
    {
        title: "Project Meeting",
        date: "2026-03-18",
        category: "Meeting",
        desc: "Discuss final year project."
    }
];

let events = [...sampleEvents];


// ✅ Correct variable name
const mainContainer = document.getElementById("eventContainer");

