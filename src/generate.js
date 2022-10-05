const generateTeam = (team) => {
    const html = [];

    // Markdown for manager
    const generateManager = manager => {
        let managerHtml = 
        `<div class="card text-bg-primary m-4" style="width: 18rem;">
            <h5 class="card-title">Name</h5>
            <h6 class="card-subtitle mb-2">Job Title: ${manager.name}</h6>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                    <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>`;
        html.push(managerHtml);
    }
    // Markdown for Engineer
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
    // Markdown for Intern
    const generateIntern = intern => {
        let internHtml = 
        `<div class="card text-bg-primary m-4" style="width: 18rem;">
            <h5 class="card-title">Name</h5>
            <h6 class="card-subtitle mb-2">Job Title: ${intern.name}</h6>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email: ${intern.email}</li>
                    <li class="list-group-item">Office number: ${intern.officeNumber}</li>
                </ul>
            </div>
        </div>`;
        html.push(internHtml);
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === 'Manager') {
            generateManager(team[i]);
        }
        if (team[i].getRole() === 'Engineer') {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === 'Intern') {
            generateIntern(team[i]);
        }
    }
    return html.join('');
};



module.exports = team => {
    return `<!DOCTYPE html>
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

        <main>
            ${generateTeam(team)}
        </main>
    </body>`;
}

