import React from 'react'
import { Container, Title, Text, Button, createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  hero: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    padding: theme.spacing.xl * 3,
  },
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 48,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
  },
  description: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    maxWidth: 600,
    margin: '0 auto',
  },
}))

const Hero = () => {
  const { classes } = useStyles()

  return (
    <div className={classes.hero}>
      <Container size="lg" style={{ textAlign: 'center' }}>
        <Title className={classes.title}>UI Designer & Front-end Developer</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Crafting beautiful and functional web experiences that blend creativity with technical expertise
        </Text>
        <Button size="lg" mt="xl" component="a" href="#projects">
          View My Work
        </Button>
      </Container>
    </div>
  )
}

export default Hero