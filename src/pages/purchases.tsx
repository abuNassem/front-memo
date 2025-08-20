import { useAppSelector } from "../store/categories/hooks";

type OrderItem = {
  img: string;
  title: string;
  quantity: number;
  price: number;
};

type Order = {
  fullName: string;
  phone: string;
  address: string;
  status: string;
  totalPrice: number;
  priceWithDelavery: number;
  paymentMethod: string;
  items: OrderItem[];
};

const Purchases = () => {
  const localhost = "https://back-last.onrender.com/";

  // تحديد النوع هنا يحل مشكلة never[]
  const orders = useAppSelector((state: { orders: { orders: Order[] } }) => state.orders.orders);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">My Purchases</h2>

      {orders.map((order, idx) => (
        <div key={idx} className="border rounded-lg p-4 shadow-sm mb-6">
          <div className="mb-2">
            <p>
              <strong>Name:</strong> {order.fullName}
            </p>
            <p>
              <strong>Phone:</strong> {order.phone}
            </p>
            <p>
              <strong>Address:</strong> {order.address}
            </p>
            <p>
              <strong>Status:</strong> {order.status}
            </p>
            <p>
              <strong>Total Price:</strong> ${order.totalPrice}
            </p>
            <p>
              <strong>Total Price With Delivery:</strong> ${order.priceWithDelavery}
            </p>
            <p>
              <strong>Payment Method:</strong> {order.paymentMethod}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {order.items.map((item, i) => (
              <div key={i} className="border rounded p-2 text-center">
                <img
                  src={localhost + item.img}
                  alt={item.title}
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                <p className="text-sm font-bold">${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Purchases;
