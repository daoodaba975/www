import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "pg";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      const client = new Client({
        connectionString: process.env.NEON_DATABASE_URL,
      });

      await client.connect();

      const result = await client.query(
        "SELECT * FROM subscribers WHERE email = $1",
        [email]
      );

      if (result.rows.length > 0) {
        await client.end();
        return res.status(400).json({ error: "Email already subscribed !" });
      }

      await client.query("INSERT INTO subscribers (email) VALUES ($1)", [
        email,
      ]);

      await client.end();

      res.status(200).json({ message: "Subscription successful !" });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Internal server error !" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
