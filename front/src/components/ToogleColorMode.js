import { Box, Button, useColorMode, Text, HStack } from '@chakra-ui/react'
import {SunIcon, MoonIcon} from '@chakra-ui/icons'
import React from 'react'
import { Icon } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function ToogleColorMode() {

  const {colorMode, toggleColorMode} = useColorMode();
  return (
      <div> 

    <HStack>

   <Button  onClick={()=> toggleColorMode()} pos='sticky' top="0" right="0" m="1rem">
    {colorMode === 'dark' ? <Icon as={SunIcon}/>:<Icon as={MoonIcon}/>}
   </Button> 
   </HStack>

      <Text pos='sticky' top="0" right="0" m="38rem" as="b" fontSize='5xl'>¡Felices Fiestas Tino!</Text>
      </div>
  )
}

export default ToogleColorMode