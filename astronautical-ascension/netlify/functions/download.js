export async function handler(event) {
  const token = event.queryStringParameters?.token;

  if (!token) {
    return {
      statusCode: 400,
      body: "Kein Token übergeben",
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
    },
    body: `Download-Token empfangen:\n${token}`,
  };
}