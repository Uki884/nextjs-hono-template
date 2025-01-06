import { getExamples } from "../../server/getExamples";

export const ExampleList = async () => {
  const data = await getExamples();

  return <div>{JSON.stringify(data)}</div>;
};
