import React from 'react'
import Toolcard from '../Toolcard'
import './style.scss'

export default function Dashboard() {
    const tools = [
        {
            text: 'ParaQuestions',
            description: 'API to find answers for a question from a given passage',
            icon: 'fa-question-circle',
            link: '',
            available: true
        }, {
            text: 'Summarizer',
            description: 'API to Summarize a given chunk of text',
            icon: 'fa-question-circle',
            link: '',
            available: true
        }, {
            text: 'Sentiment Analyzer',
            description: 'API to perform general purpose sentiment analysis',
            icon: 'fa-question-circle',
            link: '',
            available: false
        }, {
            text: 'Object Detector',
            description: 'Detects objects in a given image',
            icon: 'fa-question-circle',
            link: '',
            available: false
        }
    ]
    return (
        <div className='dashboard'>
            <h1>API Tools</h1>
            <h3>Try AI Based Tools</h3>
            <div className="tools">
                {tools.map((tool) => { return <Toolcard key={tool.text} {...tool} /> })}
            </div>
        </div>
    )
}
