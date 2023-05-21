interface IPersonBuilder {
  name: string;
  lastName: string;
  age: number;
  country: string;
  city: string;
  hobbies: string[];
  setName(name: string): IPersonBuilder;
  setLastName(lastName: string): IPersonBuilder;
  setAge(age: number): IPersonBuilder;
  setCountry(country: string): IPersonBuilder;
  setCity(country: string): IPersonBuilder;
  addHobby(hobby: string): IPersonBuilder;
  reset(): void;
  build(): Person;
}

class Person {
  private name: string;
  private lastName: string;
  private age: number;
  private country: string;
  private city: string;
  private hobbies: string[];

  constructor(
    name: string,
    lastName: string,
    age: number,
    country: string,
    city: string,
    hobbies: string[]
  ) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.hobbies = hobbies;
  }

  getFullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

class StandardPersonBuilder implements IPersonBuilder {
  name: string;
  lastName: string;
  age: number;
  country: string;
  city: string;
  hobbies: string[];

  constructor() {
    this.name = '';
    this.lastName = '';
    this.age = 0;
    this.country = '';
    this.city = '';
    this.hobbies = [];
  }

  reset(): void {
    this.name = '';
    this.lastName = '';
    this.age = 0;
    this.country = '';
    this.city = '';
    this.hobbies = [];
  }

  setName(name: string): IPersonBuilder {
    this.name = name;
    return this;
  }
  setLastName(lastName: string): IPersonBuilder {
    this.lastName = lastName;
    return this;
  }
  setAge(age: number): IPersonBuilder {
    this.age = age;
    return this;
  }
  setCountry(country: string): IPersonBuilder {
    this.country = country;
    return this;
  }
  setCity(country: string): IPersonBuilder {
    this.country = country;
    return this;
  }
  addHobby(hobby: string): IPersonBuilder {
    this.hobbies.push(hobby);
    return this;
  }
  build(): Person {
    const person = new Person(
      this.name,
      this.lastName,
      this.age,
      this.country,
      this.city,
      this.hobbies
    );
    this.reset();
    return person;
  }
}

class PersonDirector {
    private personBuilder: IPersonBuilder;

    constructor(personBuilder: IPersonBuilder) {
        this.personBuilder = personBuilder;
    }

    setPersonBuilder(personBuilder: IPersonBuilder) {
        this.personBuilder = personBuilder;
    }

    createSimplePerson(name: string, lastName: string) {
        this.personBuilder.setName(name)
                          .setLastName(lastName);
    }
}


const personBuilder = new StandardPersonBuilder();

const luke = personBuilder.setName('luke')
                            .setLastName('skywalker')
                            .addHobby('fly')
                            .addHobby('sleep')
                            .build();

                        
                            console.log(luke);

const michael = personBuilder.setName('michael')
                            .setLastName('scott')
                            .addHobby('eat')
                            .setCountry('USA')
                            .setAge(45)
                            .build();

                        
                            console.log(michael);
                            
// director

const director = new PersonDirector(personBuilder);
director.createSimplePerson('Toby', 'Flenderson');

const toby = personBuilder.build();

console.log(toby);



export {}