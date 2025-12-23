// Creation Pattern - Singleton
var Database = /** @class */ (function () {
    function Database() {
        console.log("Database created");
    }
    Database.getInstance = function () {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    };
    Database.prototype.query = function (sql) {
        console.log("Executing query: ".concat(sql));
    };
    return Database;
}());
var db1 = Database.getInstance();
var db2 = Database.getInstance();
console.log(db1 === db2);
