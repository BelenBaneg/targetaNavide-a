import React from "react";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
 import { useAuthContext } from "../utils/context-user.js";
import axios from "axios";
import ToogleColorMode from "./ToogleColorMode.js";
import { Tabs, TabList, TabPanels, Text, Avatar, Button, Flex, Box, Heading, Spacer, ButtonGroup, HStack } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  
  return (<div>
    
    <Flex minWidth='max-content' alignItems='center' m="1%" gap='2'>
  <Box p='2'>
    <Heading size='md'><div>
      <ToogleColorMode/>
      </div></Heading>
  </Box>
</Flex>

  </div>)
};

export default Navbar;
