import {
  useToast,
  Box,
} from "native-base";

export function AlertError(toast: any, text: string) {
  toast.show({
    render: () => {
      return (
        <Box bg='red.500' px='3' py='1' rounded='sm' mb={5} fontSize={'md'}>
          {text}
        </Box>
      );
    },
  });
}
