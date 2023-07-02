import { Configuration, OpenAIApi } from "openai";
import dontenv from 'dotenv'

dontenv.config()

const configuration = new Configuration({
    apiKey : process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export default openai;