const generateTeam = (team) => {
    const html = [];

    const generateManager = manager => {
        let managerHtml = 
        `<div class="card text-bg-primary m-4" style="width: 18rem;">
            <h5 class="card-title">Name</h5>
            <h6 class="card-subtitle mb-2">Job Title: ${manager.name}</h6>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: ${manager.email}</li>
                    <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>`;
        html.push(managerHtml);
    }
    const generateEngineer = engineer => {
        let engineerHtml = 
        `<div class="card text-bg-primary m-4" style="width: 18rem;">
            <h5 class="card-title">Name</h5>
            <h6 class="card-subtitle mb-2">Job Title: ${engineer.name}</h6>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: ${engineer.email}</li>
                    <li class="list-group-item">Office number: ${engineer.officeNumber}</li>
                </ul>
            </div>
        </div>`;
        html.push(engineerHtml);
    }
};

for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === 'Manager') {
        generateManager(team[i]);
    }
    if (team[i].getRole() === 'Engineer') {
        generateEngineer(team[i]);
    }
}
    



module.exports = team => {
    return
    `<!DOCTYPE html>
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

        </header>
    </body>`
}

