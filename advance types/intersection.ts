{
  type File = {
    path: string;
    isOk: boolean;
  };

  type Database = {
    connectionUrl: string;
    credentials: string;
  };

  type AccessFileType = File & Database;
}
