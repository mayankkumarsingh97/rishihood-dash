//
//
export async function getUserProfile() {
  const response = await fetch(`https://fakestoreapi.com/users/3`);
  //
  if (!response.ok) {
    throw new Error(`${response.status} - Failed to fetch product!`);
  }
  const data = await response.json();
  return data;
}