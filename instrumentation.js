import connect from "@/lib/db";
export async function register() {
  if (process.env.SKIP_DB === '1') {
    console.log("Skipping DB connect (local dev)");
    return;
  }
  console.log("Connecting to database...");
  await connect();
  console.log("DB connected");
}
