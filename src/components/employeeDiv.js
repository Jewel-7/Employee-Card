export const renderEmployeeCard = (emp) => {
    const card = document.createElement("div");
    card.innerHTML = `<div class="employee-image"> 
    <img src="${emp.imageUrl}"alt ="Employee Image"/> 
    </div> 
    <p id="emp${emp.id}">${emp.firstName} ${emp.lastName}</p> 
    <p>${emp.company}</p>`;
    card.className = "employee-card";
    return card;
};