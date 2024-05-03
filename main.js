const addRowToTable = (firstName, lastName, age, city, elementIndex) => {
    const tableBody = document.querySelector(".table tbody");
    tableBody.insertAdjacentHTML(
        "beforeend",
        `
            <tr>
                <th scope="row">${elementIndex}</th>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${age}</td>
                <td>${city}</td>
                <td>      
                <button onclick="deleteRow(event)" class="btn btn-danger delete-button-${elementIndex}">Delete row</button>
                </td>
            </tr>
    `
    );
};


let elementIndex = 0;

const newRowButton = document.querySelector(".add-new-button");

newRowButton.addEventListener("click", () => {


    const firstNameInput = document.querySelector(".firstName");
    const lastNameInput = document.querySelector(".lastName");
    const ageInput = document.querySelector(".age");
    const cityInput = document.querySelector(".city");


    addRowToTable(firstNameInput.value, lastNameInput.value, ageInput.value, cityInput.value, elementIndex);


    const deleteButton = document.querySelector(`.delete-button-${elementIndex}`);


    deleteButton.addEventListener("click", (event) => {
        event.target.parentElement.parentElement.remove();
    });

    elementIndex += 1;


    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    cityInput.value = '';

});

const deleteRow = (event) => {
    event.target.parentElement.parentElement.remove();
};