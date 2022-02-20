import './style.scss'
import List from '../List'

export default function Sidebar() {
    const items = ['ParaQuestions', 'Summarizer', 'Sentiment Analyzer', 'Object Detector']
    return <div className="pages">
        <ul>
            {items.map((item, index) => <List key={index} text={item} />)}
        </ul>
    </div>
}
