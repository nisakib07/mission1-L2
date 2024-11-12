{
const friends:string[]=['Sakib', 'Mimi', 'Auri']
const friends2: string[]=['Ball', 'Doll', 'Call']
friends.push(...friends2)


const object1 ={
    vat : 'rice',
    mangso : 'meat',
    dal : 'lentil'
}


const object2={
    drinks :'speed',
    water :'mum'
}



const objectList :{
    drinks: string;
    water: string;
    vat: string;
    mangso: string;
    dal: string;
} ={
    ...object1, ...object2
}


// rest operator

const greetFriends = (f1:string, f2:string, f3:string)=>{
    console.log(`Hi ${f1}, ${f2}, ${f3}`);
    
}

greetFriends('Sakib', 'Rakib', 'Dakib')


const greetFriends2 = (...friends : string[])=>{
    friends.forEach(friend=>{
        console.log(`hi , ${friend}`);
        
    })
}
 
greetFriends2('Sakib', 'Mota', 'Khata')


// console.log(objectList);













}