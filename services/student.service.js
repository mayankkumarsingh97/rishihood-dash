//
export async function getFakeStudentList(query) {
  const response = await fetch(
    !query
      ? `http://localhost:4000/students?_page=1&_limit=50`
      : `https://fakestoreapi.com/products/category/${query}`
  );
  if (!response.ok) {
    throw new Error(
      `${response.status} - Failed to fetch product list!` ||
      "Failed to fetch product list!"
    );
  }
  const data = await response.json();
  return data;
}



export async function getStudentList() {
  const response = await fetch(`http://localhost:4000/students?_page=2&_limit=50`);
  //
  if (!response.ok) {
    throw new Error(`${response.status} - Failed to fetch!`);
  }
  const data = await response.json();
  return  data 
}
