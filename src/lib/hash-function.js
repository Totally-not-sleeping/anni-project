const crypto = require("crypto");

export default function createSHA256Hash(inputString) {
  const hash = crypto.createHash("sha256");
  hash.update(inputString);
  return hash.digest("hex");
}
