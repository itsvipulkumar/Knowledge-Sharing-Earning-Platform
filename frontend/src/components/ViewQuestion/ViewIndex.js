import React, { PureComponent } from 'react'
import Sidebar from '../StackOverflow/Sidebar'
// import Main from './Main'
import MainQns from './MainQns'


function ViewIndex() {
    return (
        <div className='stack_index'>
            <div className="stack_index_content">
                {/* <Sidebar/> */}
                <MainQns/>
            </div>

        </div>
    )
}

export default ViewIndex
