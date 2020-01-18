var john = { 
     FirstName:'john',
     LastName:'Doe',
     Gender:'male',
     birthyear:2000,
    calcAge: function()
    {
       this.age= (2020-this.birthyear);
    }

    };

    john.calcAge();
    console.log(john);