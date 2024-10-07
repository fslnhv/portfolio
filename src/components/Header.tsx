import React from 'react'
import { Link } from 'react-router-dom'
import { Header as MantineHeader, Container, Group, Button, useMantineColorScheme } from '@mantine/core'
import { IconSun, IconMoonStars } from '@tabler/icons-react'

const Header = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <MantineHeader height={60}>
      <Container size="lg">
        <Group justify="space-between" h="100%">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>Your Name</h1>
          </Link>
          <Group>
            <Button component={Link} to="/#projects" variant="subtle">
              Projects
            </Button>
            <Button component={Link} to="/#contact" variant="subtle">
              Contact
            </Button>
            <Button onClick={() => toggleColorScheme()} variant="outline">
              {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
            </Button>
          </Group>
        </Group>
      </Container>
    </MantineHeader>
  )
}

export default Header