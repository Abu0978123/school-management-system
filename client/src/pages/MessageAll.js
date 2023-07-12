import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
function MessageAll() {
    //////////////////
    const { t } = useTranslation();
    const [msg, setMsg] = useState({
        message: ""
    })
    const handleInput = (e) => {
        let name, value;
        console.log(e)
        name = e.target.name
        value = e.target.value
        setMsg({ ...msg, [name]: value })
    }
    /////////////////////////
    const [showds, setShowDs] = useState([])
    const getData = async () => {
        const res = await fetch("/passedresult")
        const data = await res.json()
        // console.log(data)
        if (res.status === 422 || !data) {
            window.alert('No results  found ')
            console.log("No results found")
            // navigate.push("/home")
        } else {
            setShowDs(data)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    //////////////////////////

    const sendMessage = () => {

        // eslint-disable-next-line 
        showds.map((testresult) => {

            let numbers = testresult.TestResult.marks
            if (numbers > 40) {
                var phoneno = testresult.phoneno
                console.log(phoneno)
                var APIKey = 'dd7e6e1dd7933889dcaf22a740840dad'
                const { message } = msg
                var textmessage = message

                fetch(`https://api.veevotech.com/sendsms?hash=${APIKey}&receivenum=${phoneno}&sendernum=8583&textmessage=${textmessage}`).then((response) => {
                    if (response.ok) {
                        window.alert('Message Send Successfully ')

                    } else {
                        window.alert('Failed to Send Message')
                    }
                })
            }
        })
        
    }
    return (
        <div className='container'>
            <div className='container mt-5'>
                <div className="row row-content">
                    <div className='conatiner'>
                        <div class="col-12 mb-4 d-flex justify-content-center bg-success">
                            <h1 className='SMTPC text-white animate-fade-in-top-right p-2'>{t('SMTPC')}</h1>
                        </div>
                        <br />
                    </div>
                    <div className="col-12 col-lg-12 col-sm-12 ">
                        <form>
                            <div className="form-group row mb-3">
                                <label className="col-md-2 form-label">{t('Message')}</label>
                                <div className="col-12 col-lg-12 col-sm-12">
                                    <textarea
                                        onChange={handleInput}
                                        value={msg.message}
                                        className="form-control" id="message" name="message" rows="12"></textarea>
                                </div>
                            </div>
                        </form>
                        <br />
                    </div>
                </div>
            </div>
            <div>
                <button className='btn btn-primary' onClick={sendMessage} > {t('SMTPC')}</button>
            </div>
        </div>
    )
}

export default MessageAll