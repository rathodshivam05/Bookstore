import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react'

const BookCard = () => {

    return (
        <Box p={4} borderWidth={1} borderRadius="md" bg="white" border="1px solid">
            <Heading size="md" mb={2}>
                Product Name
            </Heading>
            <Text>Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            <Button mt={4} colorScheme="teal" size="sm">
                Add to Cart
            </Button>
        </Box>
    );
}

export default BookCard
