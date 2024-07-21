class Shape {
  constructor(userText, textColor, shapeColor) {
    this.userText = userText;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  setColor(color) {
    this.shapeColor = color;
  }
}

class Triangle extends Shape {
  renderShape() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }

  renderText() {
    return `<text x="150" y="135" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.userText}</text>`;
  }

  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${this.renderShape()}
      ${this.renderText()}
    </svg>`;
  }
}

class Circle extends Shape {
  renderShape() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }

  renderText() {
    return `<text x="150" y="110" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.userText}</text>`;
  }

  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${this.renderShape()}
      ${this.renderText()}
    </svg>`;
  }
}

class Square extends Shape {
  renderShape() {
    return `<rect x="50" y="50" width="150" height="150" fill="${this.shapeColor}" />`;
  }

  renderText() {
    return `<text x="125" y="135" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.userText}</text>`;
  }

  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${this.renderShape()}
      ${this.renderText()}
    </svg>`;
  }
}

module.exports = { Triangle, Circle, Square };
