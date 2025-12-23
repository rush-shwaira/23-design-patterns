// 12-proxy/user.service.ts
export interface UserService {
  getUser(id: string): Promise<string>;
}
