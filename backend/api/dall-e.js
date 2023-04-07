import {Configuration,OpenAIApi} from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    organization:"org-BCZzQbSSJ7XMuCHgdvpiteXR"
});
const openai = new OpenAIApi(configuration);

export const predict = async (prompt) => {
    console.log(process.env.OPENAI_API_KEY)
    const response = await openai.createImage({
        prompt:prompt,
        n:1,
        size:"256x256"
    });
    return response;
}

const x = predict("cat");
// console.log(x.status)