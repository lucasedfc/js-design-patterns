class Editor {
  constructor(implementor) {
    this.implementor = implementor;
  }

  print(width, height, color) {
    this.implementor.setWidth(width);
    this.implementor.setHeight(height);
    this.implementor.setColor(color);
    this.implementor.print();
  }
}

class EditorWithClear extends Editor {
    constructor(implementor) {
        super(implementor)
    }

    clear() {
        this.implementor.setWidth(0);
        this.implementor.setHeight(0);
        this.implementor.print();
    }
}

class HtmlPainter {
  constructor(container) {
    this.container = container;
    this.width = '1px';
    this.height = '1px';
    this.color = '#000000';
  }

  setWidth(width) {
    this.width = width + 'px';
  }

  setHeight(height) {
    this.height = height + 'px';
  }

  setColor(color) {
    this.color = color;
  }

  print() {
    this.container.innerHTML = `<div
        style="width:${this.width}; height: ${this.height}; background: ${this.color};">
        
        </div>`;
  }
}

class CanvasPainter {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.width = 1;
        this.height = 1;
        this.color = '#000000';
    }

    setWidth(width) {
        this.width = width;
      }
    
      setHeight(height) {
        this.height = height;
      }
    
      setColor(color) {
        this.color = color;
      }
    
      print() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(0, 0, this.width, this.height);
      }


}


const editor = new Editor(new HtmlPainter(document.querySelector('#content')));

document.querySelector('#range').addEventListener('input', (e) => {
    const width = e.target.value;
    const height = e.target.value;
    const color = document.querySelector('#editorColor').value;
    editor.print(width, height, color);
})

document.querySelector('#editorColor').addEventListener('input', (e) => {
    const width = document.querySelector('#range').value
    const height = document.querySelector('#range').value
    const color = e.target.value;
    editor.print(width, height, color);
})

const editor2 = new Editor(new CanvasPainter(document.querySelector('#canvas')));
document.querySelector('#range').addEventListener('input', (e) => {
    const width = e.target.value;
    const height = e.target.value;
    const color = document.querySelector('#editorColor').value;
    editor2.print(width, height, color);
})

document.querySelector('#editorColor').addEventListener('input', (e) => {
    const width = document.querySelector('#range').value
    const height = document.querySelector('#range').value
    const color = e.target.value;
    editor2.print(width, height, color);
})

const editor3 = new EditorWithClear(new HtmlPainter(document.querySelector('#content')));

document.querySelector('#btn').addEventListener('click', (e) => {
    editor3.clear();
})

const editor4 = new EditorWithClear(new CanvasPainter(document.querySelector('#canvas')));

document.querySelector('#btn').addEventListener('click', (e) => {
    editor4.clear();
})