"use client"

interface Order {
  id: string
  customerName: string
  pizzaType: string
  quantity: number
  orderDate: Date
  status: "delivered" | "pending" | "canceled"
}

interface OrdersTableProps {
  orders: Order[]
}

export function OrdersTable({ orders }: OrdersTableProps) {
  const getStatusBadge = (status: Order["status"]) => {
    const baseClasses = "px-3 py-1 rounded-full text-sm font-medium"

    switch (status) {
      case "delivered":
        return `${baseClasses} bg-green-100 text-green-800`
      case "pending":
        return `${baseClasses} bg-yellow-100 text-yellow-800`
      case "canceled":
        return `${baseClasses} bg-red-100 text-red-800`
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`
    }
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Pizza Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Order Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customerName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.pizzaType}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatDate(order.orderDate)}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={getStatusBadge(order.status)}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
