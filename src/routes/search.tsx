import { Box, Container, Divider, Flex, Grid } from '@mantine/core';
import SearchBox from '@/components/searchBox';
import { IconSearch } from '@tabler/icons-react';
import ExerciseCard from '@/components/common/exercise-card';
import { jsonData } from '@/components/json';
// import { useContext } from 'react';
// import { CtxFavoriteExercises } from '@/context/favorites.ctx';

export default function RouteSearch() {
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

      <Container fluid>
        <Grid px="xl" gutter="xl">
          {jsonData.map(item => {
            return (
              <Grid.Col
                lg={3}
                md={4}
                sm={6}
                xs={12}
                display="flex"
                style={{ justifyContent: 'center' }}
                key={item.id}
              >
                <ExerciseCard exercise={item} />
              </Grid.Col>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
