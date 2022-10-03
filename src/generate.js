//const Manager = require("../lib/Manager");
const teamGenerater = (team) => {
    console.log(team);

    const html = [];

    const managerGenerator = manager => {
        console.log(manager);
        let managerHTML = `
        <div class="card text-bg-primary m-4" style="width: 18rem;">
        
            <h5 class="card-title">Name</h5>
            <h6 class="card-subtitle mb-2">Job Title: Manager</h6>
            <div class="card-body">
                ${manager.name} <br/>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Emai: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                    <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>`;
        html.push(managerHTML);
    }
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            managerGenerator(team[i]);
        }
    }
};

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    </head>
    
    <body>
        <header>
            <h1> My Team </h1>
        </header>

        <main> ${teamGenerater(team)} </main>
    </body>`;
};