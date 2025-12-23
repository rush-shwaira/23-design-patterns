// index.ts
import { UserProfile } from "./user-profile";

const adminTemplate = new UserProfile("ADMIN", ["READ", "WRITE", "DELETE"], {
  theme: "dark",
});

const adminUser = adminTemplate.clone();
adminTemplate.name = "Rushi";

const readonlyUser = adminTemplate.clone();
readonlyUser.permissions = ["READ"];
