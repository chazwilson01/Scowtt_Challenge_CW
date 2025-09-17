import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function generateMovieFact(movieTitle: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a movie trivia expert. Generate one interesting, fun fact about the given movie. Keep it concise (1-2 sentences) and engaging. Make sure each fact is different and unique."
        },
        {
          role: "user",
          content: `Tell me an interesting fact about the movie "${movieTitle}".`
        }
      ],
      max_tokens: 150,
      temperature: .98,
    })

    return completion.choices[0]?.message?.content || "No fact available at the moment."
  } catch (error) {
    console.error('Error generating movie fact:', error)
    return "Unable to generate a fact about this movie right now."
  }
}
