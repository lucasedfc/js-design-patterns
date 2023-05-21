class Form {
  constructor(controls, action) {
    this.controls = controls;
    this.action = action;
  }

  getContent() {
    return `<form method="POST" action="${this.action}">
            ${this.controls.reduce((acum, c) => {
              return (
                acum +
                `<div>
                                    ${this.getLabel(c)}
                                    ${this.getInput(c)}
                                </div>`
              );
            }, '')}
                <button type="submit">Send</buton>
            </form>`;
  }

  getLabel(control) {
    return `<label>${control.text}</label>`;
  }

  getInput(control) {
    return `<input type="${control.type}"
            id="${control.name}"
            name="${control.name}"
        />`;
  }
}

class FormBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.action = '';
    this.controls = [];
  }

  setAction(action) {
    this.action = action;
    return this;
  }

  setText(name, text) {
    this.controls.push({
      name,
      text,
      type: 'text',
    });

    return this;
  }

  setEmail(name, text) {
    this.controls.push({
      name,
      text,
      type: 'email',
    });

    return this;
  }

  setCheckbox(name, text) {
    this.controls.push({
      name,
      text,
      type: 'checkbox',
    });

    return this;
  }

  setColor(name, text) {
    this.controls.push({
      name,
      text,
      type: 'color',
    });

    return this;
  }

  build() {
    const form = new Form(this.controls, this.action);
    this.reset();
    return form;
  }
}

class FormDirector {
  constructor(formBuilder) {
    this.setBuilder(formBuilder);
  }

  setBuilder(formBuilder) {
    this.formBuilder = formBuilder;
  }

  createPeopleForm() {
    this.formBuilder.reset();
    this.formBuilder
      .setText('firstName', 'Your first name')
      .setText('lastName', 'Your last name');
  }

  createContactForm() {
    this.formBuilder.reset();
    this.formBuilder
      .setText('Name', 'Your Name')
      .setText('email', 'Your email')
      .setText('message', 'What is your message');
  }
}

const formBuilder = new FormBuilder();

const formPerson = formBuilder
  .setAction('add.php')
  .setText('firstName', 'Your first name')
  .setText('lastName', 'Your last name')
  .setCheckbox('male', 'Male')
  .setEmail('email', 'Your email')
  .setColor('color', 'Your favourite color')
  .build();

document.querySelector('#form1').innerHTML = formPerson.getContent();

const formEmail = formBuilder
  .setAction('send.php')
  .setText('Name', 'Your first name')
  .setEmail('email', 'Your email')
  .build();

document.querySelector('#form2').innerHTML = formEmail.getContent();

const director = new FormDirector(formBuilder);

director.createPeopleForm();
document.querySelector('#form3').innerHTML = formBuilder.build().getContent();

director.createPeopleForm();
document.querySelector('#form4').innerHTML = formBuilder.build().getContent();

director.createContactForm();
document.querySelector('#form5').innerHTML = formBuilder.build().getContent();
