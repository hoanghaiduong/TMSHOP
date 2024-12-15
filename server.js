const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = [
  "http://localhost:5173",
  "https://tmshop-client.vercel.app",
];
app.use(
  cors({
    origin: function (origin, callback) {
      // Kiểm tra xem origin có trong danh sách cho phép hay không
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
// app.use(express.static(path.join(__dirname, "public")));
app.use("/", (req, res) => {
  return res.status(200).json({
    message: "Hello World",
  });
});
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
