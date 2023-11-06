export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly SPRING = new Tag('Spring', 'green');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly POSTGRESQL = new Tag('PostgreSQL', 'blue');
    static readonly PYTHON = new Tag('Python', 'yellow');
    static readonly FLASK = new Tag('Flask', 'pink');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');


    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}