const formatPrice = (price: number) => {
  if (!price) {
    return "";
  }
  return `RM ${price.toLocaleString("en", { minimumFractionDigits: 2 })}`;
};

export { formatPrice };
