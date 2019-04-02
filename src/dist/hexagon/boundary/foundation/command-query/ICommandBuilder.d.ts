declare namespace Microservice.Foundation {
    interface ICommandBuilder<Command extends ICommand> extends ICommandQueryBuilder<Command> {
    }
}
