var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);                  // this keyword is responsible for switching the object john to mike
        console.log(2016 - this.yearOfBirth);
        
       
    }
}
john.calculateAge();
var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};
mike.calculateAge = john.calculateAge;
mike.calculateAge();