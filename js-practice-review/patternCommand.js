/**
 * Command Design Pattern
 *
 * The Command pattern encapsulates actions as objects.
 *
 */

class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  executeCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    this.value = command.undo(this.value);
  }
}

class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }

  execute(currentValue) {
    return currentValue + this.valueToAdd;
  }

  undo(currentValue) {
    return currentValue - this.valueToAdd;
  }
}

class SubtractCommand {
  constructor(valueToSubtract) {
    this.valueToSubtract = valueToSubtract;
  }

  execute(currentValue) {
    return currentValue - this.valueToSubtract;
  }

  undo(currentValue) {
    return currentValue + this.valueToSubtract;
  }
}

class AddThenSubtract {
  constructor(valueToAdd, valueToSubtract) {
    this.addCommand = new AddCommand(valueToAdd);
    this.subtractCommand = new SubtractCommand(valueToSubtract);
  }

  execute(currentValue) {
    const newValue = this.addCommand.execute(currentValue);
    return this.subtractCommand.execute(newValue);
  }

  undo(currentValue) {
    const newValue = this.subtractCommand.undo(currentValue);
    return this.addCommand.undo(newValue);
  }
}

const calculator = new Calculator();
// calculator.executeCommand(new AddCommand(10));
// calculator.executeCommand(new SubtractCommand(5));
calculator.executeCommand(new AddThenSubtract(10, 2));
console.log(calculator.value);
