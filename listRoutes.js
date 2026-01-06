const fs = require("fs");
const path = require("path");
require("dotenv").config(); // dotenv を読み込む

const API_URL = process.env.NEXT_PUBLIC_SUPABASE_API_URL || "http://localhost:3000";
// 正しいディレクトリパスを指定
const apiDir = path.join(__dirname, "src/app/api");

function listRoutes(dir, baseUrl = `${API_URL}/api`) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      listRoutes(fullPath, `${baseUrl}/${file}`);
    } else if (file === "route.ts") {
      console.log(`Route: ${baseUrl} - Methods: Check ${fullPath}`);
    }
  });
}

listRoutes(apiDir);