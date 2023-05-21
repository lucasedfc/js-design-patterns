interface IState {
  next(ticket: Ticket): number | null;
  add(ticket: Ticket, quantity: number): void;
}

class Ticket {
  private state: IState;
  quantity: number;
  readonly limit: number;
  private num: number;

  constructor(limit: number) {
    this.limit = limit;
    this.quantity = 0;
    this.num = 0;
    this.state = new EmptyState();
  }

  get getNum(): number {
    return this.num++;
  }

  set setState(state: IState) {
    this.state = state;
  }

  get getState() {
    return this.state;
  }

  next(): number | null {
    return this.state.next(this);
  }

  add(quantity: number): void {
    return this.state.add(this, quantity);
  }
}

class EmptyState implements IState {
  next(ticket: Ticket): number | null {
    return null;
  }
  add(ticket: Ticket, quantity: number): void {
    if (quantity < ticket.limit) {
      ticket.quantity = quantity;
      ticket.setState = new WithDataState();
    } else if (quantity === ticket.limit) {
      ticket.quantity = quantity;
      ticket.setState = new FullState();
    }
  }
}

class WithDataState implements IState {
  next(ticket: Ticket): number | null {
    ticket.quantity--;
    if (ticket.quantity <= 0) {
      ticket.setState = new EmptyState();
    }
    return ticket.getNum;
  }
  add(ticket: Ticket, quantity: number): void {
    if (ticket.quantity + quantity < ticket.limit) {
      ticket.quantity += quantity;
    } else if (ticket.quantity + quantity === ticket.limit) {
      ticket.quantity += quantity;
      ticket.setState = new FullState();
    }
  }
}

class FullState implements IState {
  next(ticket: Ticket): number | null {
    ticket.quantity--;
    if (ticket.quantity <= 0) {
      ticket.setState = new EmptyState();
    } else {
      ticket.setState = new WithDataState();
    }
    return ticket.getNum;
  }
  add(ticket: Ticket, quantity: number): void {
    console.log('Full tickets');
  }
}


const ticket = new Ticket(5);

console.log(ticket.getState);
console.log(ticket.next());
console.log(ticket.add(6));
console.log(ticket.getState);
console.log(ticket.next());
console.log(ticket.add(4));
console.log(ticket.getState);
console.log(ticket.next());
console.log(ticket.next());
console.log(ticket.add(3));
console.log(ticket.getState);
console.log(ticket.add(1));
