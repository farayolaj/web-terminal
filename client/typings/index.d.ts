declare module 'xterm-js-shell' {
  import LocalEchoController from 'local-echo';
  import { Terminal } from 'xterm';

  import style from 'ansi-styles';

  /**
   * Command structure
   * @param {SubShell} shell Shell instance for input/output
   * @param {Array<string>} args Arguments for the command
   */
  type Command = (shell: SubShell, args: string[]) => void;

  /**
    * Autocomplete Callback structure
    * @param {number} index The index in the args array to autocomplete
    * @param {Array<string>} args The list of arguments being passed to the command
    * @return {Array<string>} The list of options the user could try
    */
  type AutocompleteProvider = (index: number, args: string[]) => string[];

  /** Shell abstraction for Xterm.js */
  export default class XtermJSShell {

    prompt: () => Promise<string>;
    commands: Map;
    echo: LocalEchoController;
    term: Terminal;
    env: Record<string, unknown>;
    attached: boolean;

    /**
     * Instantiate and attach a shell to the terminal
     * @param {Terminal} term The xterm.js terminal
     */
    constructor(term: Terminal)

    /**
     * Detach the shell from xtermjs
     */
    detach(): void

    /**
     * Attach the shell to the terminal
     */
    attach(): void

    /**
     * Utility for doing colors
     * @return The foreground instance of [ansi-colors](https://github.com/chalk/ansi-styles)
     */
    get color(): typeof style.color

    get bgColor(): typeof style.color

    /**
     * Read-eval-print-loop, run this to start the shell
     * @return {Promise} Resolves after a pass of the loop finishes
     */
    async repl(): Promise<void>

    /**
     * Run a command in the shell
     * @param  {string}         command The name of the command to run
     * @param  {Array<string>}  args    The list of command arguments to run
     * @return {Promise}                Resolves after the command has finished
     */
    async run(command: string, args: string[], flags: unknown): Promise<void> 

    /**
     * Add a command to the shell
     * @param  {string}        command The name of the command
     * @param  {Command}      fn      Async function that takes a shell / args
     * @return {XtermJSShell}          Returns self for chaining
     */
    command(command: string, fn: Command, autocomplete?: unknown): XtermJSShell

    // Internal command for auto completion of command names
    autoCompleteCommands(index: number, tokens: string[]): string[]

    async readChar(message: string): Promise<string>

    async readLine(message: string): Promise<string>

    async abortRead(reason: string): Promise<void>

    async print(message: string | Uint8Array): Promise<void>

    async printLine(message: string | Uint8Array): Promise<void>

    async printList(list: string[]): Promise<void>
  }

  class SubShell {
    
    shell: XtermJSShell;
    destroyed: boolean;

    constructor(shell: XtermJSShell)

    async *readStream(): AsyncGenerator

    async readChar(message: string): Promise<string>

    async readLine(message: string): Promise<string>

    async abortRead(reason: string): Promise<void>

    async print(message: string | Uint8Array): Promise<void>

    async printLine(message: string | Uint8Array): Promise<void>

    async printList(list: string[]): Promise<void>

    get color(): typeof style.color

    get bgColor(): typeof style.bgColor

    get commands(): string[]

    get env(): Record<string, unknown>

    get cols(): number

    get rows(): number

    checkDestroyed(): void

    destroy(): void
  }
}

declare module 'local-echo' {
  import { Terminal } from 'xterm';

  interface LocalEchoOptions {
    /**
     * The maximum number of entries to keep in history
     */
    historySize: number;
    /**
     * The maximum number of auto-complete entries, after which the user
     * will have to confirm before the entries are displayed
     */
    maxAutocompleteEntries: number
  }

  export default class LocalEchoController {
    constructor(term: Terminal, options?: LocalEchoOptions);

    read(prompt: string, continuationPrompt?: unknown): Promise<string>;

    readChar(prompt: string): Promise<string>;
    
    abortRead(reason?: string): void;

    print(message?: string): Promise<void>;

    println(message?: string): Promise<void>;

    printWide(strings?: string[]): Promise<void>;

    addAutocompleteHandler(callback: AutocompleteCallback, ...args: unknown[]);
  }

  interface AutocompleteCallback {
    (index: number, tokens: string[], ...args:? unknown[]): string[];
  }
}