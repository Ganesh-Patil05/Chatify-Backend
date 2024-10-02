const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    "http://13.202.17.30",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATIFY_TOKEN = "chatify-token";

export { corsOptions, CHATIFY_TOKEN };
