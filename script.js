const input = document.querySelector("input");
const addbtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addbtn.addEventListener("click", (e) => {
    e.preventDefault();

    const text = input.value;

    if (text !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;

        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);

        input.value = "";
        empty.style.display = "none";
    }
});

function addDeleteBtn() {
    const deletebtn = document.createElement("button");
    deletebtn.className = "btn-delete";


    const img = document.createElement("img");
    img.src = "images/xx.png"; 
    img.alt = "Eliminar"; 

    deletebtn.appendChild(img);

    deletebtn.addEventListener("click", (e) => {
        const li = e.target.closest("li");
        ul.removeChild(li);

        const items = document.querySelectorAll("li");
        if (items.length === 0) {
            empty.style.display = "block";
        }
    });

    return deletebtn;
}

