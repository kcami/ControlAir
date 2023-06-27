import React from "react";
import {
  VStack,
  Box,
  Divider,
  HStack,
  Switch,
  Badge,
  Avatar,
  Text,
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface Props {
  temperature: number;
  device: string;
  local: string;
  isEnabled: boolean;
}

export default function (props: Props) {
  const { temperature, device, local, isEnabled } = props;
  return (
    <Box
      borderWidth={"1"}
      borderRadius={'md'}
      padding={3}
      m={5}
      borderColor={"primary.500"}
    >
      <HStack space={3} justifyContent={"space-between"} alignItems={"center"}>
        <HStack space={2} alignItems={"center"}>
          <Box
            borderRadius={'100'}
            padding={3}
            backgroundColor={"primary.500"}
          >
            <MaterialCommunityIcons
              name='snowflake'
              color={"white"}
              size={26}
            />
          </Box>
          <Badge
            colorScheme={"success"}
            variant={"outline"}
          >{`${temperature}° C`}</Badge>
        </HStack>
        <Box px='4'>
          <Text fontSize={15}>{`${device}`}</Text>
          <Text fontSize={15} color={"gray.400"}>{`${local}`}</Text>
        </Box>
        <Switch defaultIsChecked colorScheme='emerald' />
      </HStack>
    </Box>
  );
}
