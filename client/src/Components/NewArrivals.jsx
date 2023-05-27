import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const NewArrivals = () => {

    const data = [
        {
            id: 1,
            name: 'Gone Girl',
            image: '/images/0307588378.jpg',
            author: 'Gillian Flynn',
            publication: 'Crown Publishers',
            ISBN: '0307588378',
            category: 'thriller',
            price: 12.87,
            countInStock: 5,
            rating: 4,
            numReviews: 12,
        },
        {
            id: 2,
            name: 'Gone Girl',
            image: '/images/0307588378.jpg',
            author: 'Gillian Flynn',
            publication: 'Crown Publishers',
            ISBN: '0307588378',
            category: 'thriller',
            price: 12.87,
            countInStock: 5,
            rating: 4,
            numReviews: 12,
        },
        {
            id: 3,
            name: 'The Girl with the Dragon Tattoo',
            image: '/images/0606264728.jpg',
            author: 'Stieg Larsson',
            publication: 'Turtleback Books',
            ISBN: '0606264728',
            category: 'thriller',
            price: 8.78,
            countInStock: 5,
            rating: 3.5,
            numReviews: 10,
        },
        {
            id: 4,
            name: 'The Girl with the Dragon Tattoo',
            image: '/images/0606264728.jpg',
            author: 'Stieg Larsson',
            publication: 'Turtleback Books',
            ISBN: '0606264728',
            category: 'thriller',
            price: 8.78,
            countInStock: 5,
            rating: 3.5,
            numReviews: 10,
        },
        {
            id: 5,
            name: 'Fahrenheit 451',
            image: '/images/0006546064.jpg',
            author: 'Ray Bradbury',
            publication: 'HARPER COLLINS',
            ISBN: '0006546064',
            category: 'thriller',
            price: 9.98,
            countInStock: 5,
            rating: 3.0,
            numReviews: 10,
        },
        {
            id: 6,
            name: 'The Girl on the Train',
            image: '/images/1594633665.jpg',
            author: 'Paula Hawkins',
            publication: 'Riverhead Books',
            ISBN: '1594633665',
            category: 'thriller',
            price: 7.98,
            countInStock: 5,
            rating: 3.5,
            numReviews: 10,
        },
    ]
    return (
        <>
            <Heading size="xl" textAlign='center' mb={4} textDecoration={'underline'}>New Arrivals</Heading>
            <SimpleGrid columns={3} spacing={3} w="80%" m='auto' justifyContent={'center'} align='center'>
                {
                    data.map((e) => (
                        <Box key={e.id} textAlign={'center'} m="auto" >
                            <Image src={e.image} alt="image" w="200px" h="300px" border='1px solid' />
                            <Text w="80%" textAlign={'center'} fontWeight={'bold'}>{e.name}</Text>
                            <Text w="80%" >-{e.author}</Text>
                            <Text w="80%" >Rs. {e.price}$</Text>
                        </Box>
                    ))
                }
            </SimpleGrid>
        </>
    )
}

export default NewArrivals
