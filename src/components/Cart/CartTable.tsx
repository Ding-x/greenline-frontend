import React from 'react'
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Table,
  TableContainer,
  TextField,
} from '@material-ui/core'
import { Product, ProductRow } from '../../models/product'
import {
  ccyFormat,
  createProductRow,
  initialProcuts,
  totalAfterDiscount,
} from '../../helpers/cartHellper'

interface Props {}

interface State {
  products: ProductRow[]
}

class CartTable extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      products: initialProcuts(),
    }
  }

  setProductQty = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    p: Product
  ) => {
    const { products } = this.state
    products.forEach((item) => {
      if (item.product === p) {
        item.qty = parseInt(e.target.value, 10)
      }
    })
    this.setState({
      products: products.map((item) =>
        createProductRow(item.product, item.qty, item.unit)
      ),
    })
  }

  render() {
    const { products } = this.state
    return (
      <TableContainer component={Paper}>
        <Table aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Qty.</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Before Discount</TableCell>
              <TableCell>Discount Reason</TableCell>
              <TableCell align="right">After Discount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => (
              <TableRow key={row.product}>
                <TableCell>{row.product}</TableCell>
                <TableCell align="right">
                  <TextField
                    type="number"
                    value={row.qty}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      inputProps: {
                        min: 0,
                      },
                    }}
                    onChange={(e) => this.setProductQty(e, row.product)}
                  />
                </TableCell>
                <TableCell align="right">{ccyFormat(row.unit)}</TableCell>
                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                <TableCell>{row.discountDesc}</TableCell>
                <TableCell align="right">{ccyFormat(row.discount)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={5}>Total</TableCell>
              <TableCell align="right">
                {ccyFormat(totalAfterDiscount(products))}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}

export default CartTable
