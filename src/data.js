import campaigns from "../json data/frontend developer/meta/campaign.json" with {type: 'json'};
import allOrders  from "../json data/frontend developer/shiproact/orders.json" with {type: 'json'};

export function calculateBusinessMetrics(orders, campaigns) {
  let totalRevenue = 0;
  let totalOrders = orders.length;
  let productCost = 0;
  let adsSpent = 0;
  let shippingSpent = 0;

  const productRevenue = {};

  // for ad spent
  campaigns.forEach((campaign) => {
    adsSpent += Math.floor(parseFloat(campaign.spend || 0));
  });

  orders.forEach((order) => {
    if (order.shipments && order.shipments.length > 0) {
        order.shipments.forEach((shipment) => {
            shippingSpent += parseFloat(shipment.shipping_charges || 0);
        })
    }
    if (order.products && order.products.length > 0) {
      order.products.forEach((product, index) => {
        totalRevenue += parseFloat(product.selling_price);
        productCost += parseFloat(product.product_cost) * product.quantity;
        if (!productRevenue[product.product_id]) {
          productRevenue[product.product_id] = {
            name: product.name,
            total: parseFloat(product.price) * product.quantity,
            quantity: product.quantity,
          };
        } else {
          productRevenue[product.product_id].total +=
            product.quantity * parseFloat(product.price);
          productRevenue[product.product_id].quantity += product.quantity;
        }
      });
    }
  });

  const grossProfit = totalRevenue - productCost;
  const netProfit =
    adsSpent !== null && shippingSpent !== null
      ? grossProfit - adsSpent - shippingSpent
      : null;

  const aov = totalOrders > 0 ? totalRevenue / totalOrders : 0;

  const roas =
    adsSpent !== null && adsSpent > 0 ? totalRevenue / adsSpent : null;
  const poas =
    productCost > 0 && adsSpent !== null && adsSpent > 0
      ? productCost / adsSpent
      : null;

  return {
    productRevenue,
    totalRevenue,
    totalOrders,
    adsSpent,
    shippingSpent,
    productCost,
    grossProfit,
    netProfit,
    aov,
    roas,
    poas,
  };
}

export const businessMetrics = calculateBusinessMetrics(allOrders.data, campaigns.data)
