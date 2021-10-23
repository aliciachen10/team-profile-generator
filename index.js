//insert html body for appending things into here: 
let htmlbody = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="Description" content="Enter your description here" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
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

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

const employeeArray = [];
let lastInfo;

// TODO: Create an array of questions for user input
const selectRole = [
  {
    type: 'choice',
    message: 'Choose the role of your team member',
    name: 'role',
    choices: ['Manager', 'Engineer', 'Intern']
  }
];

//all questions
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

      // let newEmployee = new Employee(answers.name, answers.id, answers.email)
      // employeeArray.push({ "name": newEmployee.name, "id": newEmployee.id, "email": newEmployee.email })

      console.log(employeeArray)
      //this is alper is doing, where we output to a json with information containing all the user's input in key value pairs
      const filename = `./dist/index.html`
      // const content = JSON.stringify(answers, null, 2) 

      

    if (answers.is_finished) {
      for (i = 0; i < employeeArray.length; i++) {
        if (employeeArray[i]['role'] === 'Manager') {
          console.log(employeeArray[i])
          lastInfo = `${employeeArray[i]['office number']}`
          console.log(lastInfo)
        } else if (employeeArray[i]['role'] == 'Intern') {
          lastInfo = `${employeeArray[i]['school']}`
          console.log(lastInfo)
        } else if (employeeArray[i]['role'] == 'Engineer') {
          lastInfo = `<a href="http://www.github.com/${employeeArray[i]['Github']}">${employeeArray[i]['Github']}</a>`
          console.log(lastInfo)
        }

        const content = `
      <div class="card" style="width: 18rem;">
        <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
        <div class="mb-5 p-3 card-head">
          <h5 class="card-title">${employeeArray[i]['name']}</h5>
          <i class="fas fa-mug-hot"></i>
          <h6>${employeeArray[i]['role']}</h6>
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


//to do:
//get the icons working