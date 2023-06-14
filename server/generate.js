import openaiClient from "./api.js";

const generate = async(queryDescription) => {
    const response = await openaiClient.createCompleteion({
        model:"text-davinci-003",
        prompt: 'Convert the following natural language into a SQL query: \n\n${queryDescription}.',
        max_tokens: 150,
        temperature: 0
    })
    return response.data.choices[0].text
}

export default generate