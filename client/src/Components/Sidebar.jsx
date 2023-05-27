import React from 'react';
import { Button, Checkbox, Divider, Drawer, DrawerBody, DrawerContent, DrawerHeader, Text, VStack } from '@chakra-ui/react';

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <Drawer isOpen={isOpen} placement="left">
            <DrawerContent mt={[125, 95]} borderRight="5px solid teal" >
                <DrawerHeader>Filters</DrawerHeader>
                <DrawerBody ml={5} >
                    <VStack align="start" spacing={2}>
                        <Text fontWeight="bold">Category</Text>
                        <Checkbox>Category 1</Checkbox>
                        <Checkbox>Category 2</Checkbox>
                        <Checkbox>Category 3</Checkbox>
                    </VStack>
                    <Divider my={4} />
                    <VStack align="start" spacing={2}>
                        <Text fontWeight="bold">Brand</Text>
                        <Checkbox>Brand 1</Checkbox>
                        <Checkbox>Brand 2</Checkbox>
                        <Checkbox>Brand 3</Checkbox>
                    </VStack>
                    <Button mt={4} colorScheme="teal" size="sm">
                        Apply Filters
                    </Button>
                </DrawerBody>
            </DrawerContent>

        </Drawer>
    );
};

export default Sidebar;