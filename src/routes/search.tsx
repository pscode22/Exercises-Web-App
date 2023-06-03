import { Box, Flex, Select } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import { byEquipments, byMuscles, byBodyParts } from '@/components/dataFields';

export default function RouteSearch() {
  const [searchBy, setSearchBy] = useState<string>('');
  const [selectData, setSelectDate] = useState<string[]>([]);

  useEffect(() => {
    if (searchBy) {
      if (searchBy === 'Equipments') setSelectDate(byEquipments);
      if (searchBy === 'Muscles') setSelectDate(byMuscles);
      if (searchBy === 'Body Parts') setSelectDate(byBodyParts);
    }
  }, [searchBy]);

  return (
    <Flex justify="center" align="center" mt="md">
      <Box
        w={{ base: 200, sm: 400, lg: 500 }}
        sx={theme => ({
          display: 'flex',
          // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          backgroundColor: '#1011136a',
          // color: theme.colorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[7],
          color: '#f76808',
          textAlign: 'center',
          borderRadius: theme.radius.md,
          cursor: 'pointer',

          '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          },
        })}
      >
        <Select
          data={selectData}
          placeholder={`Search by ${searchBy}`}
          variant="unstyled"
          rightSection={<div />}
          rightSectionWidth={0}
          withAsterisk
          searchable
          bg="#25262b"
          styles={{
            rightSection: { pointerEvents: 'none' },
            input: {
              padding: '0.625rem 1rem',
            },
            root: { borderRadius: '.25rem 0 0 .25rem' },
          }}
          w="70%"
          transitionProps={{
            transition: 'pop-top-left',
            duration: 80,
            timingFunction: 'ease',
          }}
        />
        <Select
          placeholder="Pick one"
          rightSection={<IconChevronDown color="#fff" size="1rem" />}
          rightSectionWidth={30}
          defaultValue="Equipments"
          styles={{
            rightSection: { pointerEvents: 'none' },
            input: { padding: '0.625rem 1rem', color: '#fff' },
            item: {
              '&[data-selected]': {
                '&, &:hover': {
                  backgroundColor: '#f76808',
                },
              },
            },
            root: { borderRadius: '0 .25rem .25rem 0' },
          }}
          data={['Equipments', 'Muscles', 'Body Parts']}
          bg="#f76808"
          variant="unstyled"
          w="30%"
          onSearchChange={setSearchBy}
        />
      </Box>
    </Flex>
  );
}
