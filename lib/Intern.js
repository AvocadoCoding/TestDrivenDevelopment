// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    
  //set office number
  constructor(name, ID, eMail, school){
      
      //call the super class constructor and pass the name, ID and email values to it
      super(name, ID, eMail);

      this.school = school;
  }

  //return employee status
  getRole(){
      const role= 'Intern'        
      return role;
  }

  //return employee status
  getSchool(){
      return this.school;
  }
}




// Exports returned values from this file when the file is called
module.exports = Intern;