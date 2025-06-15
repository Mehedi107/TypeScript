type FileSource = { path: string };
const file: FileSource = { path: 'some/path/here' };

type DBSource = { connectionUrl: string };
const db: DBSource = { connectionUrl: 'connection-url-string' };

type Source = FileSource | DBSource;

function checkData(source: Source) {
  if ('path' in source) {
    // use this to open a file
    return;
  }
  // source.connectionUrl - use this connection url
}

/////////////////////////////////////////
// Type guard via instanceof

class User {
  constructor(name: string) {}

  join() {
    // ...
  }
}

class Admin {
  constructor(role: string[]) {}

  scan() {
    // ...
  }
}

const user = new User('Max');
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

function init(entity: Entity) {
  if (entity instanceof User) {
    // ...
    return;
  }

  entity.scan();
}
