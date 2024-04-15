import React from "react";
import "../Style/sidebar.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import TopBar from "./Topbar";
import { Link } from "react-router-dom";


const LinkItems = [
  { name: "Dashboard", icon: FiHome  , link: "/main"},
  { name: "Service.M", icon: FiTrendingUp  , link: "/serviceM"},
  { name: "Request", icon: FiCompass , link: "/request" },
  { name: "Schedule", icon: FiCompass  , link: "/schedule"},
  { name: "Review", icon: FiStar , link: "/review" },
];

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
  
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")} width={"10%"} mt={"4px"}>
      <SidebarContent onClose={() => onClose} display={{ base: "none", md: "block" }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <TopBar />
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
     {/* content */}
     {/* hello */}
      </Box>
    </Box>
 
  );
}
const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("#39ac92", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      zIndex="1"
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="23px" fontWeight="bold" marginTop="25px" color="white">
          Service Chaiyo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          color="white" 
          fontWeight="bold"
          lineHeight="19px"
          className={link.name}
          marginTop= "20px"
        >
        <Link to={link.link}>{link.name}</Link>
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, isActive, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      className={isActive ? "active" : ""}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "white",
          color: "#39ac92",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            fontWeight="900"
            _groupHover={
              {
                // color: "white",
              }
            }
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
