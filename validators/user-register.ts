interface UserForRegister {
  username: string;
  email: string;
  password: string;
  name?: string;
}

export default function validateUserForRegister(
  body: unknown,
): Response | null {
  const { username, email, password } = body as UserForRegister;
  if (!username || !email || !password) {
    const resp = new Response(
      JSON.stringify({
        error: `Incorrect JSON structure`,
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    );
    return resp;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    const resp = new Response(
      JSON.stringify({
        error: `Invalid email format`,
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    );
    return resp;
  }
  return null;
}
