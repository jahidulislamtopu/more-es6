const user = {
    id: 5001,
    name: 'Thomas alba adison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side'

        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
}
const userfloor = user.address.street?.second;
console.log(userfloor);