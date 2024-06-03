class Key {
    private signature: number = (Math.random())

    getSignature() {
        return this.signature
    }
}

class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    door: boolean = false;
    key: Key;
    tenats: Person[] = [];

    constructor(key: Key) {
        this.key = key;
        this.tenats = [];
    }

    abstract openDoor(key: Key): void;

    comeIn(person: Person): void {
        if (this.door) {
            this.tenats.push(person);
            console.log(`${person.getKey().getSignature()} is coming in.`);
        } else {
            console.log('The door is closed.');
        }
    }

}

class MyHouse extends House {
    constructor(key: Key) {
        super(key);
      }

    openDoor(key: Key): void{
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true; // Відчиняємо двері
            console.log('The door is open.');
          } else {
            console.log('Wrong key!');
          }
    };
    
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};