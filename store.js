const fs = require('fs');
const inquirer = require('inquirer');
const prompt = require('../index.js');
function teamGenerator(team) {
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
        <div class="container-fluid bg-danger p-3"></div>
        <div class="mx-auto p-4 text-light" style="width: 300px;"></div>
        <h1>My Team</h1>
        <main class = "d-flex">
            <section class = "row justify-content-center">
                <div class="card text-bg-primary m-4" style="width: 18rem;">
                    <h5 class="card-title">Name</h5>
                    <h6 class="card-subtitle mb-2">Job Title: Manager</h6>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID:</li>
                            <li class="list-group-item">Email</li>
                            <li class="list-group-item">Office number:</li>
                        </ul>
                    </div>
                </div>
        
                <div class="card text-bg-primary m-4" style="width: 18rem;">
                    <h5 class="card-title">Name</h5>
                    <h6 class="card-subtitle mb-2">Job Title: Manager</h6>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID:</li>
                            <li class="list-group-item">Email:</li>
                            <li class="list-group-item">Office number:</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
      </body>
    </html>`;
};



module.exports = teamGenerator;

