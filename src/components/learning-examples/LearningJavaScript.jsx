const person = {
    name: 'Suraj Khanal',
    address: {
        line1: '724 Reigel Street',
        city: 'Lake Charles',
        country: 'USA'
    },
    profiles: ['twitter', 'linkedIn','instagram'], //array representation
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

export default function LearningJavaScript(){
    return (
        <div>
            <div> {person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.address.city}</div>
            <div>{person.address.country}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.profiles[1]}</div>
            <div>{person.profiles[2]}</div>
            <div>{person.printProfile()}</div>
        </div>
    )
}