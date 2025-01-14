import Order from "@/components/Order/Order.jsx";

const Restaurant = () => {
  
  return (
    <section className="restaurant">
      <h3 className="restaurant__heading">Restaurant Orders</h3>
      <ul className="restaurant__list">
        <Order />
      </ul>
    </section>
  );
};

export default Restaurant;
