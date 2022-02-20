import './style.scss'
import List from '../List'
import { tools } from '../Dashboard'

export default function Sidebar() {
    return <div className="pages">
        <ul>
            <List text='Home' link='/' available={true}/>
            {tools.map((item, index) => <List {...item} key={index} />)}
        </ul>
    </div>
}
