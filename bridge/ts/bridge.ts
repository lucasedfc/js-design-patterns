interface IListImplementor {
  elements: number[];

  add(number: number): void;
  getElements(): number[];
}

class OrderedList implements IListImplementor {
  elements: number[] = [];

  public add(number: number): void {
    this.elements.push(number);
    this.elements.sort();
  }

  public getElements(): number[] {
    return this.elements;
  }
}

class UniqueList implements IListImplementor {
  elements: number[] = [];

  add(number: number): void {
    if (!this.elements.includes(number)) {
      this.elements.push(number);
    }
  }
  getElements(): number[] {
    return this.elements;
  }
}

interface IDataAbstraction {
  implementor: IListImplementor;
  add(number: number): void;
  get(): number[];
  operation(fn: (n: number) => number): number[];
}

class DataRefinedAbstraction implements IDataAbstraction {
  implementor: IListImplementor;

  constructor(implementor: IListImplementor) {
    this.implementor = implementor;
  }

  add(number: number): void {
    this.implementor.add(number);
  }
  get(): number[] {
    return this.implementor.getElements();
  }
  operation(fn: (n: number) => number): number[] {
    return this.implementor.getElements().map(fn);
  }
}

const uniqueData = new DataRefinedAbstraction(new UniqueList());
const orderedList = new DataRefinedAbstraction(new OrderedList());

uniqueData.add(3);
uniqueData.add(5);
uniqueData.add(2);
uniqueData.add(1);
uniqueData.add(1);
uniqueData.add(2);

console.log(uniqueData.get());

orderedList.add(3);
orderedList.add(2);
orderedList.add(4);
orderedList.add(1);
console.log(orderedList.get());

const uniqueItems = uniqueData.operation((e: number) => e * 2);

console.log(uniqueItems);

const orderedItems = orderedList.operation((e: number) => e * 2);

console.log(orderedItems);
