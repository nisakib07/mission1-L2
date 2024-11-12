{
const user ={
    id: 1,
    name:{

        firstName: 'Sakib',
        middleName: 'Islam',
        lastName:'Nadiatul'
    },
    contact: '01700000',
    address: 'Dhaka'
}

const {contact, name : {middleName}}= user


const players : string[]=['Messi','Neymar','Di Maria','Suarez', 'Alba', 'Busquets']

const [,, website, ...rest]= players
console.log(website);
console.log(rest);


}