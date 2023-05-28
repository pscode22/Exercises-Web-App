import { Box, Flex, Text, UnstyledButton } from '@mantine/core';

export default function Header() {
  return (
    <Box bg="#1e1d1d" h="3.75rem">
      <Flex h="100%" gap="xl" justify="center" align="center" direction="row" wrap="nowrap">
        <UnstyledButton>
          <Text>Search</Text>
        </UnstyledButton>

        <UnstyledButton>
          <Text>Favorites</Text>
        </UnstyledButton>
      </Flex>
    </Box>
  );
}
