let sessionState: Record<string, boolean> = {};

export default function handler(req, res) {
  if (req.method === "POST") {
    const { section, state } = req.body;
    sessionState[section] = state;
    res.status(200).json({ message: "State saved", sessionState });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}