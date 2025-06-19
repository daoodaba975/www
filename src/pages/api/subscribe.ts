import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Unauthorized method." });
  }

  const { email } = req.body;

  if (
    !email ||
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  try {
    const response = await fetch(
      "https://api.buttondown.email/v1/subscribers",
      {
        method: "POST",
        headers: {
          Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email_address: email }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      let errorMessage = "Error during registration.";

      if (Array.isArray(result.detail)) {
        errorMessage = result.detail[0]?.msg || errorMessage;
      } else if (typeof result.detail === "string") {
        errorMessage = result.detail;
      }

      return res.status(500).json({ error: errorMessage });
    }

    return res.status(200).json({ message: "Successful registration." });
  } catch (error) {
    console.error("Server error : ", error);
    return res.status(500).json({ error: "Connection error." });
  }
}
