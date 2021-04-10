import { BrowserContainer } from '../containers/Browser'
import {useContent} from "../hooks"
import {selectionFilter} from '../utils/'

const Browse = () => {
    const {series} = useContent('series')
    const {films} = useContent('films')
    const slides = selectionFilter({series, films})
    return (
        <BrowserContainer slides={slides}/>
    )
}
export default Browse