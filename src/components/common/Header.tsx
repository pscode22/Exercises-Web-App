import { Box, Flex, Text, UnstyledButton } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function HeaderBtn({
  btnName,
  pathName,
  onClick,
}: {
  btnName: string;
  pathName: string;
  onClick: () => void;
}): JSX.Element {
  return (
    <UnstyledButton
      pb={1}
      sx={{
        borderRadius: '0',
        borderBottom: btnName.toLowerCase() === pathName ? '.1rem solid #f76808' : '.1rem solid transparent',
        color: btnName.toLowerCase() === pathName ? '#f76808' : '#c1c2c5',
        '&:hover': { borderColor: '#fff' },
      }}
      onClick={onClick}
    >
      <Text>{btnName}</Text>
    </UnstyledButton>
  );
}

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [pathName, setPathName] = useState<string>('');

  useEffect(() => {
    if (location.pathname) {
      setPathName(location.pathname.split('/')[1]);
    }
  }, [location]);

  return (
    // 202225 can also be a bg color
    <Box
      bg="#1011136a"
      color="#fff"
      h="3.75rem"
      sx={() => ({
        border: '.1px solid transparent',
        borderBottomColor: '#141517',
      })}
    >
      <Flex h="100%" gap="xl" justify="center" align="center" direction="row" wrap="nowrap">
        <HeaderBtn btnName="Search" pathName={pathName} onClick={() => navigate('/search')} />
        <HeaderBtn btnName="Favorites" pathName={pathName} onClick={() => navigate('/favorites')} />
      </Flex>
    </Box>
  );
}
