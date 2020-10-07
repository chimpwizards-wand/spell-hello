import Debug from 'debug';
import { Command } from  '@chimpwizards/wand'
import { CommandDefinition, CommandParameter, CommandArgument } from '@chimpwizards/wand/commons/command/'
const chalk = require('chalk');
const debug = Debug("w:cli:hello");

@CommandDefinition({ 
    description: 'Say Hi to someone'
})
export class Hello extends Command  { 

    @CommandArgument({ description: 'Body name', required: true})
    name: string = '';

    execute(yargs: any): void {
        debug(`Hello ${this.name}`)
        console.log(`Hello ${chalk.green(this.name)} !!!`)
    }

}

export function register ():any {
    debug(`Registering....`)
    let command = new Hello();
    debug(`INIT: ${JSON.stringify(Object.getOwnPropertyNames(command))}`)

    return command.build()
}

