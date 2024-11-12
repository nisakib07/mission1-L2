const age : number = 2

if(age>=18){
    console.log('Adult');
}else{
    console.log('Not Adult');
    
}

const isAdult = age>=18 ? 'Adult' : 'Not Adult'
console.log(isAdult);


//nullish coalescing

//null/undefined er upor base kore decision make kore. Shudhu ei dui value tei kaj korbe

const isAuthenticated = ''
const result1= isAuthenticated ?? 'Guest'
const result2= isAuthenticated ? isAuthenticated : 'Guest'

console.log({result1}, {result2});


type User = {
    name : string;
    address : {
        road: string,
        house: string,
        city?: string,
        division: string
    }
}


const user1 : User={
    name: 'Sakib',
    address:{
        road: '2',
        house:'G-17',
        division: 'Dhaka'
    }
}


const city = user1?.address?.city ?? 'City nai'
console.log({city});

