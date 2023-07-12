import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Menu from './Menu'
function TestResults() {
    const { t } = useTranslation();
    const [showds, setShowDs] = useState([])
    const getData = async () => {
        const res = await fetch("/passedresult")
        const data = await res.json()

        console.log(data)

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
    ////////////Message Api Portion////////////////
    
//////////////////////////
    ////////////////////////////
    
    return (
        <div>
        <Menu/>
            <div className='m-3'>
        
            <table className="table mt-2">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">{t('S.NO')}</th>
                        <th scope="col">{t('Name')}</th>
                        <th scope="col">{t('fathername')}</th>
                        <th scope="col">{t('Marks')}</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        showds.map((testresult, id) => {
                            return (
                                <>
                                    <tr>
                                        <th scope="row">{id + 1}</th>
                                        <td>{testresult.name}</td>
                                        <td>{testresult.fathername}</td>
                                        <td>{testresult.TestResult.marks}</td>
                                    </tr>
                                </>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
        </div>
    )
}

export default TestResults