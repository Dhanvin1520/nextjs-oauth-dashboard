"use client"

import { useState, useMemo } from "react"
import { ProtectedRoute } from "../components/protected-route"
import { OrdersTable } from "../components/orders-table"

const mockOrders = [
  {
    id: "ORD-001",
    customerName: "John Doe",
    pizzaType: "Margherita",
    quantity: 2,
    orderDate: new Date("2025-05-29"),
    status: "delivered" as const,
  },
  {
    id: "ORD-002",
    customerName: "Jane Smith",
    pizzaType: "Pepperoni",
    quantity: 1,
    orderDate: new Date("2025-05-28"),
    status: "pending" as const,
  },
  {
    id: "ORD-003",
    customerName: "Mike Johnson",
    pizzaType: "Hawaiian",
    quantity: 3,
    orderDate: new Date("2025-05-27"),
    status: "canceled" as const,
  },
  {
    id: "ORD-004",
    customerName: "Sarah Wilson",
    pizzaType: "Quattro Stagioni",
    quantity: 1,
    orderDate: new Date("2025-05-26"),
    status: "delivered" as const,
  },
  {
    id: "ORD-005",
    customerName: "Tom Brown",
    pizzaType: "Meat Lovers",
    quantity: 2,
    orderDate: new Date("2025-05-25"),
    status: "pending" as const,
  },
]

function OrdersContent() {
  const [sortBy, setSortBy] = useState<"id" | "date">("date")
  const [filterStatus, setFilterStatus] = useState<"all" | "delivered" | "pending" | "canceled">("all")

  const filteredAndSortedOrders = useMemo(() => {
    let filtered = mockOrders

    if (filterStatus !== "all") {
      filtered = filtered.filter((order) => order.status === filterStatus)
    }

    return filtered.sort((a, b) => {
      if (sortBy === "id") {
        return a.id.localeCompare(b.id)
      } else {
        return b.orderDate.getTime() - a.orderDate.getTime()
      }
    })
  }, [sortBy, filterStatus])

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Pizza Orders</h1>
          <p className="text-gray-600">Manage and track all your pizza orders</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "id" | "date")}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="date">Order Date</option>
                <option value="id">Order ID</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Filter by status:</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as any)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="all">All Status</option>
                <option value="delivered">Delivered</option>
                <option value="pending">Pending</option>
                <option value="canceled">Canceled</option>
              </select>
            </div>
          </div>

          <OrdersTable orders={filteredAndSortedOrders} />
        </div>
      </div>
    </div>
  )
}

export default function OrdersPage() {
  return (
    <ProtectedRoute>
      <OrdersContent />
    </ProtectedRoute>
  )
}
