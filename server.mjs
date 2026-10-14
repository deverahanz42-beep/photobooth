import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { networkInterfaces } from "node:os";

const root = resolve(fileURLToPath(new URL(".", import.meta.url)));
const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
};
const port = Number(process.env.PORT || 5173);
const host = process.env.HOST || "0.0.0.0";

createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);
    const pathname = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
    const filePath = resolve(root, `.${pathname}`);
    if (filePath !== root && !filePath.startsWith(`${root}${sep}`)) {
      response.writeHead(403).end("Forbidden");
      return;
    }
    const contents = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": types[extname(filePath)] || "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "no-referrer",
      "Cache-Control": "no-store",
    });
    response.end(contents);
  } catch (error) {
    response.writeHead(error.code === "ENOENT" ? 404 : 500, {
      "Content-Type": "text/plain; charset=utf-8",
    });
    response.end(error.code === "ENOENT" ? "Not found" : "Unable to serve this file.");
  }
}).listen(port, host, () => {
  console.log(`Photobooth Studio is ready at http://localhost:${port}`);
  for (const addresses of Object.values(networkInterfaces())) {
    for (const address of addresses || []) {
      if (address.family === "IPv4" && !address.internal) {
        console.log(`On your phone (same Wi-Fi): http://${address.address}:${port}`);
      }
    }
  }
  console.log("Phone camera streaming requires HTTPS; on local Wi-Fi use Upload photos to open the phone camera or photo library.");
});
