import React from "react";
import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useQuery } from "@tanstack/react-query";
import { SupplierLoginData } from "../../Supplier-Section/AuthApi/Api";
import "../Style/topbar.css";

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("black.200", "black.700"),
      }}
      // pos="fixed"
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function TopBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue("white", "#171923");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["data"],
    queryFn: SupplierLoginData,
  });

  if (isLoading) {
    return <div>...isloading</div>;
  }

  if (isError) {
    return <div>...error occured</div>;
  }

  return (
    <>
      <Box
        bg={bgColor}
        px={4}
        width="100%"
        pos="fixed"
        top={0}
        // zIndex={999}
        className="topbar"
        // marginLeft={"17.58%"}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          fontWeight="bold"
          fontSize="25px"
        >
          <Box color="#39ac92">
            {/* <Text>Suppler</Text> */}
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    {data.map((item, index) => {
                      return (
                        <p key={item.id}>
                          <p>{item.CompanyName}</p>
                        </p>
                      );
                    })}
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
