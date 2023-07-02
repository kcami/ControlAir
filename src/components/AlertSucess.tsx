import {
    Box,
  } from "native-base";
  
  export function AlertSucess(toast: any, text: string) {
    toast.show({
      render: () => {
        return (
          <Box bg='green.500' px='3' py='1' rounded='sm' mb={5} fontSize={'md'}>
            {text}
          </Box>
        );
      },
    });
  }
  