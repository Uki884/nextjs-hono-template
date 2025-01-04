import { prismaClient } from "../../lib/prisma/client";

export const IndexUsecase = async () => {
  const result = await prismaClient.user.findMany();

  return result;
};
