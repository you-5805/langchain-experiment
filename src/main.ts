import { OpenAI } from 'langchain/llms';
import { PromptTemplate } from 'langchain/prompts';
import { LLMChain } from 'langchain/chains';

const llm = new OpenAI({ temperature: 0.9 });

async function getNameSuggestion(target: string) {
  const prompt = new PromptTemplate({
    inputVariables: ['target'],
    template: `{target}にふさわしい名前を1つ提案してください。`,
  });

  const chain = new LLMChain({ llm, prompt });

  const values = await chain.call({ target: '' });
  return values.text;
}

console.log(getNameSuggestion('langchain を試してみるリポジトリの名前')); // langchain-experiment
