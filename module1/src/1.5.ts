const fullName :{
    company: string;
    firstName: string;
    middleName?:string;  //optional 
    lastName:string;
    address: 'Gazipur'; // literal Types
   readonly fathersName: string    // can not be updated later
} ={
    company:'SM Techno',
    firstName: 'Nadiatul',

    lastName:'Sakib',
    address: 'Gazipur',
    fathersName: 'Mukter Ali'
}

// fullName.fathersName= 'Mukhter'
