import { Box, Center, Divider, Flex, Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import SearchBox from '@/components/searchBox';
import { IconSearch } from '@tabler/icons-react';
import exerciseGif from '@assets/exercise-gifs/0001.gif';
// import { useState } from 'react';

// type exerciseObj = {
//   bodyPart: string;
//   equipment: string;
//   gifUrl: string;
//   id: string;
//   name: string;
//   target: string;
// };

export default function RouteSearch() {
  // const [addToFavorites, setAddToFavorites] = useState<exerciseObj[]>([]);
  // const [removeFromFavorites, setRemoveFromFavorites] = useState<exerciseObj[]>([]);
  return (
    <Box>
      <SearchBox />

      <Divider
        my="xl"
        variant="dashed"
        labelPosition="center"
        label={
          <Flex align="center" gap={5}>
            <IconSearch size={18} style={{ marginTop: '.0825rem' }} />
            <Box ml={5} fz={20}>
              Search results
            </Box>
          </Flex>
        }
      />

      <Center mt={20}>
        <Card shadow="sm" padding="lg" radius="md" withBorder w={300}>
          <Card.Section>
            <Image src={exerciseGif} height={180} alt="Norway" />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Exercise 0001</Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on
            and around the fjords of Norway
          </Text>

          <Button variant="outline" color="orange" fullWidth mt="md" radius="md">
            Add to Favorites
          </Button>
        </Card>
      </Center>
    </Box>
  );
}
