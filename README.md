## README
  # SQL Employee Database / Mark Barstow
  ## [![License](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  
  ## Description
  - This project is designed to help users keep track of employees within their company. The user will be given a selection of options upon starting the application where they can view or edit the information within their company's database.
  ## Installation
  - In order to install the application, the user must install all dependencies within the package.json file using 
  
        npm i example_dependency
  
    Before running the 
    
        node server.js command 
      the user must also launch MySQL through the command-line-interface and run this command to create the database: 
      
        SOURCE db/schema.sql
  ## Usage
  - In order to run the application, the user must input their mysql password on line 9 of the server.js file, then run the command "node server.js" within the command line once they have navigated to the correct directory. Once the application starts running, all the user has to do is respond to the prompts that appear in the CLI. Once the user is finished editing the database, they will navigate to the selection of "Exit the application" and press enter.
  
  ## Demo Video
  - The link to the demo video is located [here](https://drive.google.com/file/d/1oSfqrd6XurYoc8MhyH7S2vj31vhyXYny/view).
