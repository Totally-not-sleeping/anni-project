export default async function Check(user) {
  if (user.toLowerCase() === "michelle") {
    return { success: true };
  } else {
    return { success: false };
  }
}
