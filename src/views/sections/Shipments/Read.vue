<template>
  <v-container>
    <div class="row">
      <div class="col-md-8">
        <h3>Shipment #</h3>
      </div>
    </div>
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
              :data="order.data"
              :columns="order.columns"
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
          <div class="col-12" />

          <h5>Shipping Information</h5>

          <div class="table-responsive">
            <black-table
              :data="shipment.data"
              :columns="shipment.columns"
              thead-classes="text-primary"
            />
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
        </div>
      </div>
    </black-card>
  </v-container>
</template>

<script>
  import { BlackTable } from '@/components/black'
  import { OrdersRead } from '@/core/services/data/orders'
  import { CustomersRead } from '@/core/services/data/customer'
  import { PaymentRead } from '@/core/services/data/payment'
  import { ShipmentRead } from '@/core/services/data/shipment'
  import { ProductsOrdered } from '@/core/services/data/products'
  import {
    BillingAddressRead,
    ShippingAddressRead,
  } from '@/core/services/data/address'

  export default {
    name: 'ReadShipments',
    components: { BlackTable },
    computed: {
      order () {
        const columns = ['Order', 'Total', 'Date', 'Status', 'Channel']
        const data = OrdersRead('')
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

      shipment () {
        const columns = [
          'shipping_method',
          'shipping_price',
          'inventory_source',
          'carrier_title',
          'tracking_no',
        ]
        const data = ShipmentRead()
        return { columns, data }
      },

      products () {
        const columns = ['sku', 'name', 'qty']
        const data = ProductsOrdered()
        return { columns, data }
      },
    },
  }
</script>
