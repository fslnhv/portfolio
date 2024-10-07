import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Title, Grid, Card, Image, Text, Badge, createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: theme.shadows.md,
    },
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}))

export const projects = [
  {
    id: 1,
    title: "E-commerce UI Design",
    description: "A modern and intuitive user interface for an online store",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "UI Design",
    details: "This project showcases a sleek and user-friendly e-commerce interface designed to enhance the online shopping experience. The design focuses on clear product presentation, intuitive navigation, and a seamless checkout process."
  },
  {
    id: 2,
    title: "Weather App",
    description: "A responsive web application for checking weather forecasts",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Front-end Development",
    details: "This weather application provides real-time weather information and forecasts. Built with React and integrating with a weather API, it offers a responsive design that works seamlessly across devices."
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A sleek and professional portfolio website template",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "UI Design & Development",
    details: "This portfolio website template is designed to showcase creative work in a clean and impactful way. It features a minimalist design, smooth animations, and a fully responsive layout."
  }
]

const Projects = () => {
  const { classes } = useStyles()

  return (
    <Container size="lg" py="xl">
      <Title order={2} align="center" mb="xl">My Projects</Title>
      <Grid>
        {projects.map((project) => (
          <Grid.Col key={project.id} span={12} sm={6} md={4}>
            <Card component={Link} to={`/project/${project.id}`} p="lg" radius="md" className={classes.card}>
              <Card.Section>
                <Image src={project.image} height={160} alt={project.title} />
              </Card.Section>
              <Text className={classes.title} mt="md">{project.title}</Text>
              <Text mt="xs" color="dimmed" size="sm">{project.description}</Text>
              <Badge mt="md">{project.category}</Badge>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}

export default Projects