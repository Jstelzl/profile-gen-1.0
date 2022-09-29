//const Manager = require("../lib/Manager");

const teamGenerater = (team) => {
    console.log(team);

    const html = [];

    const managerGenerator = manager => {
        console.log(manager);
        let managerHTML = `
        <div class='card text-bg-primary m-4' style='width: 18rem;>
        
            <h5 class='card-title'>Name</h5>
            <h6 class='card-subtitle mb-2'>Job Title: Manager</h6>
            <div class='card-body>
                ${manager.name} <br/>
                <ul class='list-group list-group-flush'>
                    <li class="list-group-item">ID:</li>
                    <li class="list-group-item">Email</li>
                    <li class="list-group-item">Office number:</li>
                </ul>
            </div>
        </div>`
    }
}