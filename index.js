// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

const employeeArray = [];
let lastInfo;
let icon;

//insert html body for appending things into here: 
let htmlbody = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="Description" content="Enter your description here" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
  <link rel="stylesheet" href="./assets/css/style.css" />

  <title>My Team</title>
</head>

<body>

  <header class="container-fluid bg-dark text-light mb-5 p-5 menu-bar">
    <h1>My Team</h1>
  </header>
  <section class="container my-5">
    <div class="row">
    

    <!--append more divs into here-->
`

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'list',
    message: 'Choose the role of your team member',
    name: 'role',
    choices: ['Manager', 'Engineer', 'Intern'],
    default: 'Engineer'
  },
  {
    type: 'input',
    message: 'Enter the name of your team member',
    name: 'name',
  },
  {
    type: 'input',
    message: 'Enter the id of your team member',
    name: 'id'
  },
  {
    type: 'input',
    message: 'Enter the email of your team member',
    name: 'email'
  },
  {
    type: 'input',
    message: 'Enter the office number of your manager',
    name: 'officeNumber',
    when: (answers) => answers.role === 'Manager'
  },
  {
    type: 'input',
    message: 'Enter the Github username of your team member',
    name: 'github',
    when: (answers) => answers.role === 'Engineer'
  },
  {
    type: 'input',
    message: 'Enter the school of your intern',
    name: 'school',
    when: (answers) => answers.role === 'Intern'
  },
  {
    type: "confirm",
    name: "is_finished",
    message: "Are you done?",
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('success')
  )
}

// TODO: Create a function to initialize app
function init() {

  //ask questions and push all the answers to objects, and let them populate the employeeArray array 
  inquirer
    .prompt(questions)
    .then(function (answers) {
      if (answers.role == "Manager") {
        let newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employeeArray.push({ "name": newManager.name, "role": newManager.getRole(), "id": newManager.id, "email": newManager.email, "office number": newManager.officeNumber})
      } else if (answers.role == "Engineer") {
        let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employeeArray.push({ "name": newEngineer.name, "role": newEngineer.getRole(), "id": newEngineer.id, "email": newEngineer.email, "Github": newEngineer.github })
      } else if (answers.role == "Intern") {
        let newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
        employeeArray.push({ "name": newIntern.name, "role": newIntern.getRole(), "id": newIntern.id, "email": newIntern.email, "school": newIntern.school })
      }

      console.log(employeeArray)
      
      const filename = `./dist/index.html`

      //assign icons and last row of each card depending on the role of the employee
    if (answers.is_finished) {
      for (i = 0; i < employeeArray.length; i++) {
        if (employeeArray[i]['role'] === 'Manager') {
          icon = `<i class="fas fa-mug-hot"></i>`
          console.log(employeeArray[i])
          lastInfo = `${employeeArray[i]['office number']}`
          console.log(lastInfo)
        } else if (employeeArray[i]['role'] == 'Intern') {
          icon = `<i class="fas fa-user-graduate"></i>`
          lastInfo = `${employeeArray[i]['school']}`
          console.log(lastInfo)
        } else if (employeeArray[i]['role'] == 'Engineer') {
          icon = `<i class="fas fa-glasses"></i>`
          lastInfo = `<a href="http://www.github.com/${employeeArray[i]['Github']}">${employeeArray[i]['Github']}</a>`
          console.log(lastInfo)
        }     
        
        

        const content = `
      <div class="card" style="width: 18rem;">
        <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
        <div class="mb-5 p-3 card-head">
          <h5 class="card-title">${employeeArray[i]['name']}</h5>
          <h6>${icon} ${employeeArray[i]['role']}</h6>
        </div>
        <div class="card-body">
          <table class="table">
            <tbody>
              <tr>
                <td>ID: ${employeeArray[i]['id']}</td>
              </tr>
              <tr>
                <td>Email: <a href="mailto:${employeeArray[i]['email']}">${employeeArray[i]['email']}</a></td>
              </tr>
              <tr>
                <td>${Object.keys(employeeArray[i])[4]}: ${lastInfo}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
    htmlbody += content

      }
    
    htmlbody += 
`    </div>
  </section>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
  <script src="./assets/js/script.js"></script>


</body>

</html>`
      writeToFile(filename, htmlbody)
    } else {
      return init();
    }

      

      console.log(`your stuff has been logged `)
    });
}

// Function call to initialize app
init();