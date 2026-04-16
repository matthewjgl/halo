import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const dir = fileURLToPath(new URL(".", import.meta.url));
const mime = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".ico": "image/x-icon", ".json": "application/json", ".mp4": "video/mp4", ".mov": "video/quicktime", ".dmg": "application/octet-stream" };

createServer(async (req, res) => {
  let url = req.url === "/" ? "/index.html" : req.url;
  // allow ../assets references
  let filePath = join(dir, url);
  if (url.startsWith("/../")) filePath = join(dir, "..", url.slice(3));
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { "Content-Type": mime[extname(filePath)] || "application/octet-stream" });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
}).listen(8090, () => console.log("Serving on http://localhost:8090"));
