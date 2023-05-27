import React from 'react';
import {
    Box,
    Flex,
    Spacer,
    IconButton,
    useDisclosure,
    Stack,
    Text,
    Button,
    Input,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import LoginModal from './LoginModal';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    return (
        <Box py={2} px={4} bg="gray.800" color="white">
            <Flex alignItems="center">
                <Box>
                    <IconButton
                        display={{ base: 'block', md: 'none' }}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        onClick={isOpen ? onClose : onOpen}
                        variant="ghost"
                        colorScheme="white"
                        size="md"
                        aria-label="Toggle navigation"
                    />
                </Box>
                <Box>
                    <Text
                        onClick={() => navigate('/')}
                        fontSize="2xl"
                        fontWeight="bold"
                    >
                        BookShop
                    </Text>
                </Box>
                <Spacer />
                <Box
                    display={{
                        base: isOpen ? 'block' : 'none',
                        md: 'flex',
                    }}
                    alignItems="center"
                >
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        spacing={4}
                        align="center"
                    >
                        <Link to="/allbooks">All Books</Link>
                        <Text onClick={() => navigate('/viewcart')
                        }>Cart</Text>
                        <Button
                            bg="blue.400"
                            _hover={{ backgroundColor: 'none' }}
                            onClick={onOpen}
                            size="md"
                        >
                            Login
                        </Button>
                        <LoginModal isOpen={isOpen} onClose={onClose} />
                    </Stack>
                </Box>
            </Flex>
            <Flex justifyContent="center" my={[4, 0]}>
                <Input
                    type="text"
                    placeholder="Search books"
                    maxW="md"
                    bg="white"
                    color="gray.800"
                />
            </Flex>
        </Box>
    );
};

export default Navbar;
