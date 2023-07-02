import ExerciseCard from '@/components/common/exercise-card';
import { CtxFavoriteExercises } from '@/context/favorites.ctx';
import { Container, Grid, Text } from '@mantine/core';
import { useContext } from 'react';

export default function RouteFavorites() {
  const { favoriteExercises } = useContext(CtxFavoriteExercises);

  return (
    <div>
      <Text>Favorites Section</Text>
      <Container fluid>
        <Grid px="xl" gutter="xl">
          {favoriteExercises.map(item => {
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
