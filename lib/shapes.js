class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  setColor(color) {
    this.shapeColor = color;
  }

  renderText() {
    return `<text x="150" y="125" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

class Triangle extends Shape {
  renderShape() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }

  render() {
    return `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      ${this.renderShape()}
      ${this.renderText()}
    </svg>`;
  }
}

class Circle extends Shape {
  renderShape() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }

  render() {
    return `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      ${this.renderShape()}
      ${this.renderText()}
    </svg>`;
  }
}

class Square extends Shape {
  renderShape() {
    return `<rect x="100" y="50" width="150" height="150" fill="${this.shapeColor}" />`;
  }

  render() {
    return `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      ${this.renderShape()}
      ${this.renderText()}
    </svg>`;
  }
}

module.exports = { Triangle, Circle, Square };
