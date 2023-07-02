import { CtxFavoriteExercises } from '@/context/favorites.ctx';
import { EDispatchType, Exercise } from '@/interfaces';
import { Flex, Card, Image, Text, Button, Group } from '@mantine/core';
import { useState, useEffect, useContext } from 'react';

export default function ExerciseCard({ exercise }: { exercise: Exercise }) {
  const [addedToFavorite, setAddedToFavorite] = useState(false);
  const { favoriteExercises, dispatch } = useContext(CtxFavoriteExercises);

  useEffect(() => {
    if (favoriteExercises.length > 0) {
      if (favoriteExercises.findIndex(e => e.id === exercise.id) === -1) {
        setAddedToFavorite(false);
      } else {
        setAddedToFavorite(true);
      }
    } else {
      setAddedToFavorite(false);
    }
  }, [favoriteExercises, exercise]);

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder w={300}>
      <Card.Section>
        <Image src={exercise.gifUrl} height={280} alt="Norway" />
      </Card.Section>

      <Group position="apart" mt="md" mb={4}>
        <Text weight={500} fz={18}>
          {exercise.name}
        </Text>
      </Group>

      <Flex direction="column">
        <Text size="sm" color="dimmed">
          <span style={{ fontWeight: 'bolder' }}>TARGET</span> : {exercise.target.toUpperCase()}
        </Text>
        <Text size="sm" color="dimmed" mt={3}>
          <span style={{ fontWeight: 'bolder' }}>EQUIPMENT</span> : {exercise.equipment.toUpperCase()}
        </Text>
      </Flex>

      <Button
        variant={addedToFavorite ? 'filled' : 'outline'}
        color="orange"
        fullWidth
        mt="md"
        radius="md"
        sx={() => ({
          ':hover': {
            borderColor: 'orangered',
            color: addedToFavorite ? 'white' : 'orangered',
          },
        })}
        onClick={() => {
          return addedToFavorite
            ? dispatch({ type: EDispatchType.REMOVE, payload: exercise })
            : dispatch({ type: EDispatchType.ADD, payload: exercise });
        }}
      >
        {addedToFavorite ? 'Remove from favorite' : 'Add to favorite'}
      </Button>
    </Card>
  );
}
