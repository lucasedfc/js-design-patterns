class EncoderTextAbstraction {
  constructor(encoder) {
    this.encoder = encoder;
  }

  encode(str) {
    return this.encoder.encode(str);
  }

  decode(str) {
    return this.encoder.decode(str);
  }
}

class Base64EncoderImplementor {
  encode(str) {
    return window.btoa(encodeURIComponent(str));
  }

  decode(str) {
    return decodeURIComponent(window.atob(str));
  }
}

class HTMLEncoderImplementor {
  encode(str) {
    const paragraphs = str.split('.').map((e) => `<p>${e.trim()}</p>`);
    const filteredParagraphs = paragraphs.filter((p) => p.trim().length > 7); // Exclude empty paragraphs with less than 7 characters
    return filteredParagraphs.join('');
  }

  decode(str) {
    return str.split('</p>').reduce((acum, e) => {
      return e !== '' ? acum + e.replace('<p>', '') + '. ' : acum + '';
    }, '');
  }
}

const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplementor());

console.log(encoder1.encode('luke skywalker'));
console.log(encoder1.decode('bHVrZSBza3l3YWxrZXI='));

const encoder2 = new EncoderTextAbstraction(new HTMLEncoderImplementor());

console.log(
  encoder2.encode(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur dolores recusandae voluptates obcaecati. Eaque, quasi cupiditate. Cupiditate harum eos corporis, sit explicabo consequatur excepturi doloribus sed libero nihil ratione.'
  )
);

console.log(
  encoder2.decode(
    '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p><p>Praesentium consectetur dolores recusandae voluptates obcaecati</p><p>Eaque, quasi cupiditate</p><p>Cupiditate harum eos corporis, sit explicabo consequatur excepturi doloribus sed libero nihil ratione</p>'
  )
);
