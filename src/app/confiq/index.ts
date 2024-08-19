import path from "path"
import env from "dotenv"

env.config(({path:path.join(process.cwd(), ".env")}))

export const confiq = {
    Port : process.env.PORT,
    Database_url : process.env.DATABASE_URL,
    Node_Env : process.env.NODE_ENV,
    Stripe_Scrict_key : process.env.STRIPE_SCRICT_KEY
}