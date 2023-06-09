import { HandlerContext } from "$fresh/server.ts";

import UserModel from "../../../models/User.ts";
import validateMethod from "../../../validators/method.ts";

export async function handler(req: Request, _ctx: HandlerContext) {
  const validateMethodResp = validateMethod(req, "GET");
  if (validateMethodResp) return validateMethodResp;

  const users = await UserModel.find().select("-hashedPassword");

  return new Response(
    JSON.stringify(users.reverse()),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
}
