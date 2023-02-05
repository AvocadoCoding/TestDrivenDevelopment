// TODO: Write code to define and export the Employee class

//create class Employee

class Employee{

    // set name, id and email
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //return name
    getName(){
        return this.name;
    }

    //return name
    getId(){
        return this.id;
    }

    //return eMail
    getEmail(){
        return this.email;
    }

    //return employee status
    getRole(){
        const role= 'Employee'
        return role;
    }

}

// Exports returned values from this file when the file is called
module.exports = Employee;