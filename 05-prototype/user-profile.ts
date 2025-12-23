// user-profile.ts
import { Prototype } from "./prototype";

export class UserProfile implements Prototype<UserProfile> {
  constructor(
    public name: string,
    public permissions: string[],
    public settings: Record<string, any>
  ) {}

  clone(): UserProfile {
    return new UserProfile(
      this.name,
      [...this.permissions], // deep copy
      { ...this.settings } // deep copy
    );
  }
}
