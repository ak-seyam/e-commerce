import CustomAxios from "../../axios-config/axios-config";

export async function getProductByName(productName: string) {
  return await CustomAxios.get(`/products?name=${productName}`).then(
    (resp) => resp.data
  );
}

export async function getBestDealsProducts(
  page: number = 1,
  limit: number = 20
) {
  return CustomAxios.get(
    `/bestdeals`
  )
    .then((resp) => resp.data)
}
