const multiplyForm = document.querySelector("#multiply-form")

const numberInput = document.querySelector("#number")

const multiplicadorInput = document.querySelector("#multiplicador")

const multiplyTable = document.querySelector("#multiply-operations")

const multiplyTitle = document.querySelector("#multiply-title span")


multiplyForm.addEventListener("submit", (e) => {
    e.preventDefault() 

    const multiplicandoNumber = +numberInput.value; 
    const multiplicadorNumber = +multiplicadorInput.value; 

    if (!multiplicandoNumber || !multiplicadorNumber) return; 

    createTable(multiplicandoNumber, multiplicadorNumber);
});


const createTable = (multiplicandoNumber, multiplicadorNumber) => {
    multiplyTable.innerHTML = ""; 

    for (i = 1; i <= multiplicadorNumber; i++) {
        const result = multiplicandoNumber * i;

        const template = `<div class="rows">
            <div class="operations">${multiplicandoNumber} x ${i} = </div>
            <div class="result">${result}</div>
        </div>` 

        const parser = new DOMParser(); 

        const htmlTemplate = parser.parseFromString(template, "text/html"); 

        const row = htmlTemplate.querySelector(".rows");

        multiplyTable.appendChild(row);

    }

    multiplyTitle.innerText = multiplicandoNumber; 
};