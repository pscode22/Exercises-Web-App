import ExerciseCard from '@/components/common/exercise-card';
import { CtxFavoriteExercises } from '@/context/favorites.ctx';
import { Exercise } from '@/interfaces';
import { Box, Container, Flex, Grid, Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useContext, useState } from 'react';

export default function RouteFavorites() {
  const { favoriteExercises } = useContext(CtxFavoriteExercises);

  const [searchedValue, setSearchedValue] = useState<string>('');
  const [filteredBySearch, setFilteredBySearch] = useState<Exercise[]>(favoriteExercises);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedValue(e.target.value);
    const query = e.target.value.toUpperCase();
    let getData = [...favoriteExercises];

    getData = getData.filter(item => {
      return item.name.toUpperCase().indexOf(query) !== -1;
    });
    setFilteredBySearch([...getData]);
  };

  return (
    <div>
      {/* <Text>Favorites Section</Text> */}
      <Container fluid>
        <Flex justify="center" align="center" mt="md" mb="md">
          <Box w={{ base: 200, sm: 400, lg: 500 }}>
            <Input
              icon={<IconSearch />}
              placeholder="Search by name"
              value={searchedValue}
              onChange={e => handleChange(e)}
              bg="#25262b"
            />
          </Box>
        </Flex>
        <Grid px="xl" gutter="xl">
          {filteredBySearch.map(item => {
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
    </div>
  );
}
