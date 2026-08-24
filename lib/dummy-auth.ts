export type DummyAuthRole = "audience" | "presenter" | "admin";

const DUMMY_USERS: Record<
  string,
  { password: string; role: DummyAuthRole }
> = {
  "audience@inclusaai.com": { password: "1234", role: "audience" },
  "presenter@inclusaai.com": { password: "1234", role: "presenter" },
  "admin@inclusaai.com": { password: "1234", role: "admin" },
};

export function authenticateDummyUser(
  email: string,
  password: string,
): DummyAuthRole | null {
  const user = DUMMY_USERS[email.trim().toLowerCase()];
  if (!user || user.password !== password) {
    return null;
  }
  return user.role;
}

export function getAppRedirectUrl(role: DummyAuthRole): string {
  const urls: Record<DummyAuthRole, string> = {
    audience:
      process.env.NEXT_PUBLIC_AUDIENCE_APP_URL ?? "http://localhost:3001",
    presenter:
      process.env.NEXT_PUBLIC_PRESENTER_APP_URL ?? "http://localhost:3002",
    admin: process.env.NEXT_PUBLIC_ADMIN_APP_URL ?? "http://localhost:3003",
  };

  if (role === "presenter") {
    return `${urls.presenter}/dashboard`;
  }

  return urls[role];
}
