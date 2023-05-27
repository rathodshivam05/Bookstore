import React from 'react';
import { Box, Image, SimpleGrid } from '@chakra-ui/react'
import Footer from './Footer';
import NewArrivals from './NewArrivals';

const Home = () => {
    return (
        <>
            <Image src="https://bookztron-dev-branch.netlify.app/static/media/Library_Illustration_1.c54dafea582d6757c53e.jpg" fit={'contain'} />
            <SimpleGrid columns={3} spacing={3} w="90%" m={'auto'} mt={4} color={'white'} mb={5} align="center">
                <Box bg='#0E7490' pt={3} fontWeight={'bold'} fontSize={16} height='50px' w="350px">Fiction</Box>
                <Box bg='#0E7490' pt={3} fontWeight={'bold'} fontSize={16} height='50px' w="350px">Thriller</Box>
                <Box bg='#0E7490' pt={3} fontWeight={'bold'} fontSize={16} height='50px' w="350px">Tech</Box>
                <Box bg='#0E7490' pt={3} fontWeight={'bold'} fontSize={16} height='50px' w="350px">Philosophy</Box>
                <Box bg='#0E7490' pt={3} fontWeight={'bold'} fontSize={16} height='50px' w="350px">Romance</Box>
                <Box bg='#0E7490' pt={3} fontWeight={'bold'} fontSize={16} height='50px' w="350px">Adventure</Box>
            </SimpleGrid>
            <NewArrivals />
            <Footer />
        </>
    )
}

export default Home
