import React from 'react'
import { Container, Text, createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
}))

const Footer = () => {
  const { classes } = useStyles()

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text size="sm" color="dimmed">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </Text>
      </Container>
    </div>
  )
}

export default Footer