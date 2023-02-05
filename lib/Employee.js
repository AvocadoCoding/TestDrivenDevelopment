// TODO: Write code to define and export the Employee class

//create class Employee

class Employee{

    // set name, ID and email
    constructor(name, ID, eMail){
        this.name = name;
        this.ID = ID;
        this.eMail = eMail;
    }

    //return name
    getName(){
        return this.name;
    }

    //return name
    getID(){
        return this.ID;
    }

    //return eMail
    getEmail(){
        return this.eMail;
    }

    //return employee status
    getRole(){
        const role= 'Employee'
        return role;
    }

}

// Exports returned values from this file when the file is called
module.exports = Employee;