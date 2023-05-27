import { Box, Button, Grid, GridItem, IconButton, Image, SimpleGrid, Text, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import { useState } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';

const ProductPage = () => {
    const data = [
        {
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
    const [isFiltersOpen, setFiltersOpen] = useState(false);
    const gridColumnSize = useBreakpointValue({ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' });
    const isMobile = useBreakpointValue({ base: true, md: false });
    const toggleFilters = () => {
        setFiltersOpen(!isFiltersOpen);
    };

    return (
        <Grid templateColumns={isMobile ? '1fr' : '250px 1fr'} gap={6} mb="450px">
            {isMobile && (
                <Box display="flex" justifyContent="flex-end">
                    <IconButton
                        icon={<HamburgerIcon />}
                        variant="ghost"
                        aria-label="Open Filters"
                        onClick={toggleFilters}
                    />
                </Box>
            )}
            {isMobile ? (
                <GridItem colSpan={1}>
                    <Sidebar isOpen={isFiltersOpen} onClose={toggleFilters} />
                </GridItem>
            ) : (
                <Box>
                    <Sidebar isOpen={true} />
                </Box>
            )}

            <SimpleGrid columns={3} spacing={3} w="80%" m='auto' justifyContent={'center'} align='center'>
                {
                    data.map((e) => (
                        <Box key={e.id} textAlign={'center'} m="auto" >
                            <Image src={e.image} alt="image" w="200px" h="300px" border='1px solid' />
                            <Text w="80%" textAlign={'center'} fontWeight={'bold'}>{e.name}</Text>
                            <Text w="80%" >-{e.author}</Text>
                            <Text w="80%" >Rs. {e.price}$</Text>
                            <Button mt={4} colorScheme="teal" size="sm">Add to Cart</Button>
                        </Box>
                    ))
                }
            </SimpleGrid>
        </Grid>
    );
};
export default ProductPage;