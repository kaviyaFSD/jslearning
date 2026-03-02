// class and inheritance 
// class inheritance is a way to create a new class from an existing class
// A class is like a blueprint.
// Example:
// If you want to create many users (kavi, ravi, mani), instead of writing separate code for each, we create one class and reuse it.


class User{
    constructor(name,email,password){
           this.name = name;
           this.email = email;
           this.password = password;
    }

    register(){
        console.log(this.name + ' is now registered');
        
    }
}
let kavi = new User('kavi','kavi@123','kavi@123');
kavi.register();

//  inheritance

// Inheritance means:
//    -->One class can use properties and methods of another class
//     -->Instead of rewriting same code again and again, we reuse it.

// Real-Life Example
// Think:
// User → common properties (name, email)
// Admin → special user with extra power
// Admin is also a User.
// So we inherit User class.




class Member extends User{
    constructor(name,email,password,membership){
        super(name,email,password);
        this.membership = membership;
    }
    paymemberfee(){
        console.log(this.name + ' is paid a fee rs ' + this.membership);
        
    }
}
let mike = new Member('mike','mike@123','mike@123',1000);
mike.paymemberfee();


class Admin extends User{
    constructor(name,email,password,accesslevel){
          super(name,email,password);
          this.accesslevel = accesslevel;
    }  

    login(){
        console.log(this.name + ' is logged in');
        
    }
    superadmin(){
        console.log(this.name + ' is a super admin');
        
    }
}

let admin = new Admin('bob','bob@123','bob@123','superadmin');
admin.login();
admin.superadmin();