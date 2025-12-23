// Creation Pattern - Singleton
class Database {
  private static instance: Database;
  private constructor() {
    console.log("Database created");
  }
  public static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
  query(sql: string) {
    console.log(`Executing query: ${sql}`);
  }
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2);
