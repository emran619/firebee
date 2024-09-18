import React from 'react'
import { Line, Question, QuestionOpend } from './components'

function AskedQuestions() {
    const Questions = [
        'How Does Firebee work?',
        'Will Firebee Fit on My Head? ',
        'What If I want the signal to stop? ',
        'How do you charge Firebee?'
    ]
    return (
        <div className='bg-[#FBFBFB] mt-custom-margin overflow-hidden'>
            <div className='container mx-auto text-custom-text-color'>
                <div className='w-[325px] md:w-[700px] mx-auto '>
                    <h1 className=' text-3xl text-center md:text-4xl py-5 md:py-10 '>Frequently Asked Questions</h1>
                    <Line />
                    <QuestionOpend />
                    {Questions.map((Q, i) => (
                        <Question key={i} question={Q} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default AskedQuestions