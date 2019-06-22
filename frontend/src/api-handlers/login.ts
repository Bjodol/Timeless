import { baseUrl } from "../AppContext";

export const login = async (payload: {
  username: string;
  password: string;
}) => {
  try {
    const response = await fetch(`${baseUrl}/api-token-auth/`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(payload)
    });
    const json = await response.json();
    return json as { token: string; error: undefined };
  } catch (error) {
    return { error, token: "" };
  }
};
