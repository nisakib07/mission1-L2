{
    type Student={
        id: number,
        name: string,
        contactNo?: string,
        address: string
    }
    
    const student1 : Student = {
        id: 1,
        name: 'Sakib',
        contactNo: '0170000',
        address: 'Dhaka'
    };
    
    const student2 : Student = {
        id: 2,
        name: 'Ayesha',
        address: 'Chittagong'
    };
    
    const student3 : Student= {
        id: 3,
        name: 'Rahim',
        contactNo: '0181111',
        address: 'Sylhet'
    };
    
    const student4 : Student = {
        id: 4,
        name: 'Marium',
        address: 'Rajshahi'
    };
    
    const student5 : Student = {
        id: 5,
        name: 'Fahim',
        contactNo: '0152222',
        address: 'Khulna'
    };
    
    
    type Name = string
    
    const myName :Name = 'Sakib'

type Add= (num1:number, num2:number)=> number
    const add : Add=(a, b)=>a+b
}