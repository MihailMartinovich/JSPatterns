class Command {
  constructor(instance) {
    this._instance = instance;
    this._executedCommands = [];
  }

  execute(command, ...options) {
    this._executedCommands.push(command);
    console.log(`COMMAND: Executed ${command.description} with options ${options}.`);

    return this._instance[command](...options);
  }
}

export default Command;