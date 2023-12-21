import React from "react";
import { AspectRatio, Box, Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button } from '@chakra-ui/react'

function Home() {
  
  return (
    <div>
      <Box ml="33%">
      <AspectRatio boxShadow='dark-lg' p='6' rounded='md' bg='white' maxW='560px' ratio={1}>
  <iframe
    title='naruto'
    src='https://www.youtube.com/embed/7iy1YgQ4YkI?si=FX6o5ZFrOQ_9UP21'
    allowFullScreen
  />
</AspectRatio>
</Box>

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  w='full'
  mt="3"
  boxShadow='dark-lg' 

>

  <Stack >
    <CardBody >
      <Heading size='md' >¡Felices fiestas y próspero año nuevo!</Heading>

      <Text py='2'>
      Que el espíritu navideño te acompañe en la oficina tanto como el café por las mañanas...y que el próximo año esté lleno de éxitos, nuevas oportunidades y momentos inolvidables. 
   
      Belen
    
      </Text>
    </CardBody>
  </Stack>
</Card>
    </div>
  );
}

export default Home;
