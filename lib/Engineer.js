// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    
  //set office number
  constructor(name, ID, eMail, github){
      
      //call the super class constructor and pass the name, ID and email values to it
      super(name, ID, eMail);

      this.officeNumber = github;
  }

  //return employee status
  getRole(){
      const role= 'Engineer'        
      return role;
  }

  //return employee status
  getGithub(){
      return this.github;
  }
}



// Exports returned values from this file when the file is called
module.exports = Engineer;