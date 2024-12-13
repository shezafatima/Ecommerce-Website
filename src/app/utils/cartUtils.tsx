// utils/cartUtils.ts

interface CartItem {
    id: number; // or string, based on your item IDs
    name: string; // example property
    quantity: number;
    // add other properties as necessary
  }
  
  export const handleAddToCart = (newItem: CartItem) => {
    const savedCart = localStorage.getItem("cart");
    const cart: CartItem[] = savedCart ? JSON.parse(savedCart) : [];
  
    const existingItem = cart.find((item) => item.id === newItem.id);
    if (existingItem) {
      // If the item already exists, increment its quantity
      const updatedCart = cart.map((item) =>
        item.id === newItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // Add the new item with quantity 1
      const updatedCart = [...cart, { ...newItem, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };
  