export async function getCEPByAddress(address) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${address}/json/`);
    const data = await response.json();
    return data;
  } catch (error) {
    return false;
  }
}
