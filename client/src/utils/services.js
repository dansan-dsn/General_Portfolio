export const baseUrl = "http://localhost:8000/api";

export const postRequest = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await response.json();

  if (!response.ok) {
    let message;

    if (data?.error) {
      message = data.error;
    } else {
      message = "Something went wrong";
    }

    return { error: true, message };
  }

  return data;
};
