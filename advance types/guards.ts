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
