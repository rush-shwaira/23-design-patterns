// 14-command/user.service.ts
export class UserService {
  async createUser(data: any) {
    console.log("User created");
  }
  async deleteUser(id: string) {
    console.log("User deleted");
  }
}
