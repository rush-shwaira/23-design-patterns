// user.builder.ts
import { User } from "./user";

export class UserBuilder {
  private id!: string;
  private name!: string;
  private email?: string;
  private phone?: string;
  private isActive?: boolean;

  setId(id: string) {
    this.id = id;
    return this;
  }
  setName(name: string) {
    this.name = name;
    return this;
  }

  setEmail(email: string) {
    this.email = email;
    return this;
  }

  setPhone(phone: string) {
    this.phone = phone;
    return this;
  }

  setActive(active: boolean) {
    this.isActive = active;
    return this;
  }

  build(): User {
    if (!this.id || !this.name) {
      throw new Error("id and name are required");
    }
    return new User(this.id, this.name, this.email, this.phone, this.isActive);
  }
}
