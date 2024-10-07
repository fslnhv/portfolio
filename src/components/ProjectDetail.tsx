import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Title, Text, Image, Button, Paper, createStyles } from '@mantine/core'
import { projects } from './Projects'

const useStyles = createStyles((theme) => ({
  paper: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },
}))

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()
  const project = projects.find(p => p.id === Number(id))
  const { classes } = useStyles()

  if (!project) {
    return <Container>Project not found</Container>
  }

  return (
    <Container size="lg" py="xl">
      <Paper shadow="md" p="xl" radius="md" className={classes.paper}>
        <Button component={Link} to="/" variant="subtle" mb="lg">
          Back to Projects
        </Button>
        <Image src={project.image} height={300} alt={project.title} radius="md" />
        <Title order={2} mt="lg">{project.title}</Title>
        <Text mt="md" color="dimmed">{project.description}</Text>
        <Text mt="xl" size="lg" weight={500}>Project Details</Text>
        <Text mt="sm">{project.details}</Text>
      </Paper>
    </Container>
  )
}

export default ProjectDetail