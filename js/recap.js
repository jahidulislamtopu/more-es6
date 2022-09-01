const number = [12, 546, 45, 98];
let salary = 450;
salary = 455;

//2. default perameter
function calculateSalary(salary, tax, bonus) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}
//3. templete string
const elementHTML = `
<div>
    <h3>Name: </h3>
    <p> Address: </p>
    <p>Salary: ${calculateSalary(10000, 0, 0)}</p>
    <p>Other: ${numbers[2]}</p>
</div>    
`
//4. Arrow function
const doublelt = x => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

//5. spread

const ages = [11, 13, 14, 10, 16];
const newAges = [...ages, 22, 24, , 23];

//destructing 
const { x, y, z, ...c } = { x: 45, y: 12, z: 33, name: 'Sakib al hassan', salary: 450000 };
const [a, b, ...r] = [12, 45, 21, 65, 98];
