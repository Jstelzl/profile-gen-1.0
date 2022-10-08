// inserts compiled prompt data into html markdown, (referenced in exports)
const generateTeam = (team) => {
    const html = [];

    // Markdown for manager
    const generateManager = manager => {
        let managerHtml = 
        `<div class="card" style="width: 18rem;">
            <div class="card-header">
                ${manager.name} <br/>
            </div>
            <div><i class="fas fa-mug-hot title">Manager</i></div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                    <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                </ul>
        </div>`;
        html.push(managerHtml);
    }
    // Markdown for Engineer
    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHtml = 
        `<div class="card" style="width: 18rem;">
            <div class="card-header">
                ${engineer.name} <br/>
            </div>
            <i class="fas fa-glasses"></i>Engineer</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                    <li class="list-group-item">GitHub Username: ${engineer.github}</li>
                </ul>
        </div>`;
        html.push(engineerHtml);
    }
    // Markdown for Intern
    const generateIntern = intern => {
        let internHtml = 
        `
        <div class="card" style="width: 18rem;">
                <div class="card-header">
                    ${intern.name} <br/>
                </div>
                <i class="fas fa-user-graduate"></i>Intern</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${intern.id}</li>
                        <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                        <li class="list-group-item">Office number: ${intern.university}</li>
                    </ul>
        </div>
        `;
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


// Exports html page
module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="./dist/style.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
            <title>My Team</title>

        </head>
      
        <body>
            <header>
                <h1> My Team </h1>
            </header>

            <main>
                <section class = "row justify-content-center">
                    ${generateTeam(team)}
                </section>
            </main>
            
        </body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
    </html>
    `;
}

