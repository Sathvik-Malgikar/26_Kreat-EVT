import {Configuration,OpenAIApi} from "openai";

const configuration = new Configuration({
    apiKey: "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",
    organization:"org-9aso5UUMocpTHfJkfCLB9sWJ"
});
const openai = new OpenAIApi(configuration);

export const predict = async (prompt) => {
    // console.log(process.env.OPENAI_API_KEY)
    const response = await openai.createImage({
        prompt:prompt,
        n:1,
        size:"256x256"
    });
    // console.log(response.data)
    return response.data.data[0].url;
}

// const x = predict()

// function gen(prompt){

    // const x = predict("cat")
    
    // console.log(x)
// }