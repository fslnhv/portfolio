import React from 'react'
import { Container, Title, Text, Group, ActionIcon, createStyles } from '@mantine/core'
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}))

const Contact = () => {
  const { classes } = useStyles()

  return (
    <Container className={classes.wrapper} size="lg">
      <Title align="center" className={classes.title}>
        Get in Touch
      </Title>
      <Text color="dimmed" size="lg" align="center" mt="md">
        I'm always open to new opportunities and collaborations. Let's create something amazing together.
      </Text>
      <Group position="center" mt="xl">
        <ActionIcon size="xl" variant="default" radius="xl" component="a" href="mailto:your.email@example.com">
          <IconMail size={24} />
        </ActionIcon>
        <ActionIcon size="xl" variant="default" radius="xl" component="a" href="https://www.linkedin.com/in/yourprofile" target="_blank">
          <IconBrandLinkedin size={24} />
        </ActionIcon>
        <ActionIcon size="xl" variant="default" radius="xl" component="a" href="https://github.com/yourusername" target="_blank">
          <IconBrandGithub size={24} />
        </ActionIcon>
      </Group>
    </Container>
  )
}

export default Contact