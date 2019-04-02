namespace Microservice.Foundation {
  export interface ICommandBuilder<Command extends ICommand> extends ICommandQueryBuilder<Command> {}
}
