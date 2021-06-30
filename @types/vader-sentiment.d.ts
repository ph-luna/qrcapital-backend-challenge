declare module 'vader-sentiment' {
    interface vader {
        SentimentIntensityAnalyzer: {
            // eslint-disable-next-line camelcase
            polarity_scores: (string) => {
                neg: number
                neu: number
                pos: number
                compound: number
            }
        }
    }

    const vader: vader
    export default vader
}
