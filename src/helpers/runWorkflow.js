import axios from 'axios';

export const runWorkflow = async (input, apiKey, params, setError, setOutput) => {
  if (!input || !apiKey) {
    setError('Please fill in all fields');
    return;
  }

  try {
    const response = await axios.post('https://api.openai.com/v1/completions', {
      prompt: input,
      model: params.model || 'text-davinci-003',
      max_tokens: params.tokens || 100,
    }, {
      headers: { Authorization: `Bearer ${apiKey}` }
    });
    setOutput(response.data.choices[0].text);
  } catch (error) {
    setError('Error in executing LLM workflow');
  }
};