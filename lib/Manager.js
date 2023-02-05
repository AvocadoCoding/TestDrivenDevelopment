// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    
    //set office number
    constructor(name, ID, eMail, officeNumber){
        
        //call the super class constructor and pass the name, ID and email values to it
        super(name, ID, eMail);

        this.officeNumber = officeNumber;
    }

    //return employee status
    getRole(){
        const role= 'Manager'        
        return role;
    }

    //return employee status
    getOfficeNumber(){
        return this.officeNumber;
    }
  }


// Exports returned values from this file when the file is called
module.exports = Manager;