<template>
  <black-card>
    <h5
      slot="header"
      class="title"
    >
      Order & Account
    </h5>
    <div class="row">
      <div class="col-12">
        <h3>Order Information</h3>

        <div class="table-responsive">
          <black-table
            :data="info.data"
            :columns="info.columns"
            thead-classes="text-primary"
          />
        </div>
      </div>

      <div class="col-12">
        <h3>Account Information</h3>

        <div class="table-responsive">
          <black-table
            :data="customer.data"
            :columns="customer.columns"
            thead-classes="text-primary"
          />
        </div>
      </div>

      <div class="col-12">
        <h3>Address</h3>

        <h5>Billing Address</h5>

        <div class="table-responsive">
          <black-table
            :data="billing.data"
            :columns="billing.columns"
            thead-classes="text-primary"
          />
        </div>

        <div class="col-12" />
        <div class="col-12" />

        <h5>Shipping Address</h5>

        <div class="table-responsive">
          <black-table
            :data="shipping.data"
            :columns="shipping.columns"
            thead-classes="text-primary"
          />
        </div>

        <div class="col-12" />
        <div class="col-12">
          <h3>Payment Information</h3>

          <div class="table-responsive">
            <black-table
              :data="payment.data"
              :columns="payment.columns"
              thead-classes="text-primary"
            />
          </div>
        </div>

        <div class="col-12" />
        <div class="col-12">
          <h3>Products Ordered</h3>

          <div class="table-responsive">
            <black-table
              :data="products.data"
              :columns="products.columns"
              thead-classes="text-primary"
            />
          </div>
        </div>
        <div class="col-12">
          <h4>Overall</h4>
          <div class="row">
            <div class="col-6">
              <h5>Comment</h5>
              <v-textarea v-model="order.comment" />
              <black-checkbox
                v-model="order.notify"
                class="text-left pb-5 pt-2"
              >
                Notify Customer
              </black-checkbox>
              <black-button
                type="primary"
                class="mb-3"
                size="sm"
                block
              >
                Submit Comment
              </black-button>
            </div>
            <div class="col-2" />
            <div class="col-4">
              <div class="row">
                <div class="col-5 text-left">
                  Subtotal
                </div>
                <div class="col-2 text-left">
                  -
                </div>
                <div class="col-5 text-left">
                  {{ purchase.subtotal }}
                </div>
                <div class="col-5 text-left">
                  Shipping
                </div>
                <div class="col-2 text-left">
                  -
                </div>
                <div class="col-5 text-left">
                  {{ purchase.shipping }}
                </div>
                <div class="col-5 text-left">
                  Discount
                </div>
                <div class="col-2 text-left">
                  -
                </div>
                <div class="col-5 text-left">
                  {{ purchase.discount }}
                </div>
                <div class="col-5 text-left">
                  Tax
                </div>
                <div class="col-2 text-left">
                  -
                </div>
                <div class="col-5 text-left">
                  {{ purchase.tax }}
                </div>
                <div class="col-5 text-left">
                  Grand Total
                </div>
                <div class="col-2 text-left">
                  -
                </div>
                <div class="col-5 text-left">
                  {{ purchase.total }}
                </div>
                <div class="col-5 text-left">
                  Total Paid
                </div>
                <div class="col-2 text-left">
                  -
                </div>
                <div class="col-5 text-left">
                  {{ purchase.paid }}
                </div>
                <div class="col-5 text-left">
                  Total Refunded
                </div>
                <div class="col-2 text-left">
                  -
                </div>
                <div class="col-5 text-left">
                  {{ purchase.refunded }}
                </div>
                <div class="col-5 text-left">
                  Due
                </div>
                <div class="col-2 text-left">
                  -
                </div>
                <div class="col-5 text-left">
                  {{ purchase.due }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </black-card>
</template>

<script>
  import { BlackTable } from '@/components/black'
  import { OrdersRead } from '@/core/services/data/orders'
  import { CustomersRead } from '@/core/services/data/customer'
  import { PaymentRead } from '@/core/services/data/payment'
  import { ProductsOrdered } from '@/core/services/data/products'
  import { PurchaseOrdered } from '@/core/services/data/purchase'
  import {
    BillingAddressRead,
    ShippingAddressRead,
  } from '@/core/services/data/address'

  export default {
    name: 'OrderInfo',
    components: { BlackTable },
    data: () => {
      return {
        order: {
          comment: '',
          notify: false,
        },
      }
    },
    computed: {
      info () {
        const columns = ['Order', 'Total', 'Date', 'Status', 'Channel']
        const data = OrdersRead()
        return { columns, data }
      },

      customer () {
        const columns = [
          'first_name',
          'last_name',
          'email',
          'dob',
          'phone',
          'group',
        ]
        const data = CustomersRead()
        return { columns, data }
      },

      billing () {
        const columns = [
          'line1',
          'line2',
          'suburb',
          'city',
          'zipcode',
          'country',
          'phone',
        ]
        const data = BillingAddressRead()
        return { columns, data }
      },

      shipping () {
        const columns = [
          'line1',
          'line2',
          'suburb',
          'city',
          'zipcode',
          'country',
          'phone',
        ]
        const data = ShippingAddressRead()
        return { columns, data }
      },

      payment () {
        const columns = ['Method', 'Currency']
        const data = [
          {
            method: PaymentRead(),
            currency: 'ZAR',
          },
        ]
        return { columns, data }
      },

      products () {
        const columns = [
          'sku',
          'name',
          'price',
          'status',
          'subtotal',
          'tax_percent',
          'tax_amount',
          'discount',
          'total',
        ]
        const data = ProductsOrdered()
        return { columns, data }
      },

      purchase () {
        return PurchaseOrdered()
      },
    },
  }
</script>
