import { Container, Grid } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CartTable from '../components/Cart/CartTable'

const useStyles = makeStyles(() => ({
  title: {
    textAlign: 'center',
    marginTop: '60px',
  },
}))

export const CheckOut: React.FC = () => {
  const classes = useStyles()

  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <h1 className={classes.title}>Shopping Cart</h1>
        </Grid>
        <Grid item xs={12}>
          <CartTable />
        </Grid>
      </Grid>
    </Container>
  )
}
