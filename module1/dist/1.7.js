"use strict";
{
    const friends = ['Sakib', 'Mimi', 'Auri'];
    const friends2 = ['Ball', 'Doll', 'Call'];
    friends.push(...friends2);
    const object1 = {
        vat: 'rice',
        mangso: 'meat',
        dal: 'lentil'
    };
    const object2 = {
        drinks: 'speed',
        water: 'mum'
    };
    const objectList = Object.assign(Object.assign({}, object1), object2);
    // rest operator
    const greetFriends = (f1, f2, f3) => {
        console.log(`Hi ${f1}, ${f2}, ${f3}`);
    };
    greetFriends('Sakib', 'Rakib', 'Dakib');
    const greetFriends2 = (...friends) => {
        friends.forEach(friend => {
            console.log(`hi , ${friend}`);
        });
    };
    greetFriends2('Sakib', 'Mota', 'Khata');
    // console.log(objectList);
}
