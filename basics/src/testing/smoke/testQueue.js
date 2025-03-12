import { Queue } from '../../util/DataStructures/Queue.js'


const airportQueue = new Queue(10);

try {const persons = ['Kati', 'Zoli', 'Laci', 'Évi', 'Piroska', 'Kati', 'Zoli', 'Laci', 'Évi', 'Piroska'];
    persons.forEach((person) => airportQueue.push(person));
    }
catch (e) {
    console.log(e.message);
}
do {
    try {
        var currentPerson = airportQueue.poll();
    }
    catch (e) {
        console.log(e.message);
        break;
    }
    console.log(`${currentPerson} has already checked-in.`)
}
while (true);