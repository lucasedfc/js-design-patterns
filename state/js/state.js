class DocumentContext {
  constructor() {
    this.content = '';
    this.state = new BlankState();
  }

  setState(state) {
    this.state = state;
  }

  write(text) {
    this.state.write(this, text);
  }
}

class BlankState {
  write(documentContext, text) {
    documentContext.content = text;
    documentContext.setState(new WithContentState());
  }
}

class WithContentState {
  write(documentContext, text) {
    documentContext.content += ' ' + text;
    documentContext.setState(new WithContentState());
  }
}

class ApprovedState {
  write(documentContext, text) {
    console.log('Document Approved');
  }
}


const doc = new DocumentContext();
console.log(doc.state);
doc.write('duck');
console.log(doc.content);
console.log(doc.state);
doc.write('dog');
console.log(doc.content);

doc.setState(new ApprovedState());
doc.write('another');
console.log(doc.content);

doc.setState(new WithContentState());
doc.write('cat');
console.log(doc.content);