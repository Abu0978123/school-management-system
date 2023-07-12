import React from 'react'
import Adminpanel from './Adminpanel'
import MessagePassed from './MessagePassed'
import MessageAll from './MessageAll'

function Message() {
    return (
        <div className='m-3'>
            <Adminpanel />
            <div className='Container'>
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-5 col-sm-12">
                        <MessagePassed />
                        <br/>
                    </div>
                    <div className="col-12 col-lg-5 col-sm-12">
                        <MessageAll />
                        <br/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Message