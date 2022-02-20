import React from 'react'
import Toolcard from '../Toolcard'
import './style.scss'

export const tools = [
    {
        text: 'ParaQuestions',
        description: 'API to find answers for a question from a given passage',
        icon: 'quiz',
        link: '/passage',
        available: true
    }, {
        text: 'Summarizer',
        description: 'API to Summarize a given chunk of text',
        icon: 'summarize',
        link: '',
        available: false
    }, {
        text: 'Sentiment Analyzer',
        description: 'API to perform general purpose sentiment analysis',
        icon: 'sentiment_very_satisfied',
        link: '',
        available: false
    }, {
        text: 'Object Detector',
        description: 'Detects objects in a given image',
        icon: 'radar',
        link: '',
        available: false
    }
]

export default function Dashboard() {
    
    return (
        <div className='dashboard'>
            <h3>Try AI Based Tools</h3>
            <div className="tools">
                {tools.map((tool) => { return <Toolcard key={tool.text} {...tool} /> })}
            </div>
        </div>
    )
}
