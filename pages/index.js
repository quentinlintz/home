import Header from '../components/Header/Header';
import Welcome from '../components/Welcome/Welcome';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box>
      <Header />
      <Welcome />
    </Box>
  );
}
