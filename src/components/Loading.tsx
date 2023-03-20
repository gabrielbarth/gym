import { Spinner, Center } from "native-base";

export function Loading() {
  return (
    <Center bg="gray.600" flex={1}>
      <Spinner />
    </Center>
  );
}
