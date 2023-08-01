import React from 'react'

enum OrderStatus {
    Pending,
    Shipped,
    Delivered
}

interface Order {
    orderId: string,
    status: OrderStatus
}

const orders: Order[] = [
    { orderId: '123', status: OrderStatus.Pending },
    { orderId: '456', status: OrderStatus.Shipped },
    { orderId: '789', status: OrderStatus.Delivered },
]

// function getOrderStatusText(status: OrderStatus): string {
//     switch(status){
//         case OrderStatus.Pending:
//             return 'Pending';
//         case OrderStatus.Shipped:
//             return 'Shipped';
//         case OrderStatus.Delivered:
//             return 'Delivered';
//         default:
//             return 'Unknown'
//     }
// }

export const DisplayOrderStatus: React.FC = () => {
    return(
        <>
            {orders.map(order => {
                return (
                    <div key={order.orderId}>
                    <p>{OrderStatus[order.status]}</p>
                       {/* <p>{getOrderStatusText(order.status)}</p> */}
                    </div>
                )
            })}
        </>
    )
}