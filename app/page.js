'use client'
import { useState } from 'react'

export default function Home() {
  const [inputs, setInputs] = useState([{ leftInput: '', rightInput: '' }])

  const handleInputChange = (index, column, event) => {
    const updatedInputs = [...inputs]
    updatedInputs[index][column] = event.target.value
    setInputs(updatedInputs)
  }

  const handleAddInput = () => {
    setInputs([...inputs, { leftInput: '', rightInput: '' }])
  }

  const handleDownload = () => {
    const content = inputs
      .map((input) => `[${input.leftInput}](${input.rightInput})`)
      .join('\n\n')
    const element = document.createElement('a')
    const file = new Blob([content], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'MARKDOWNLINKS.md'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const bottomPadding = {
    paddingBottom: '200px',
  }

  return (
    <div
      className='flex flex-col mt-10 w-3/4 mx-auto pb-100'
      style={bottomPadding}
    >
      <h1 className='w-full mb-4 text-center text-3xl'>
        [Markdown] (Link Generator)
      </h1>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          {inputs.map((input, index) => (
            <input
              key={index}
              type='text'
              className='w-full mb-4 p-2 border border-gray-300 rounded text-gray-800'
              placeholder='Add Text'
              value={input.leftInput}
              onChange={(event) => handleInputChange(index, 'leftInput', event)}
            />
          ))}
          <button
            className='bg-green-500 text-white px-4 py-2 rounded mt-4'
            onClick={handleDownload}
          >
            Download
          </button>
        </div>
        <div>
          {inputs.map((input, index) => (
            <input
              key={index}
              type='text'
              className='w-full mb-4 p-2 border border-gray-300 rounded text-gray-800'
              placeholder='Add Link'
              value={input.rightInput}
              onChange={(event) =>
                handleInputChange(index, 'rightInput', event)
              }
            />
          ))}
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded mt-4'
            onClick={handleAddInput}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}
/*    <div className='flex flex-row mt-10 w-3/4 mx-auto'>
      <div className='w-full'>
        <h1>Markdown Link Generator</h1>
      </div>
      <div className='w-1/2 p-4'>
        {inputs.map((input, index) => (
          <input
            key={index}
            type='text'
            className='w-full mb-4 p-2 border border-gray-300 rounded  text-gray-800'
            placeholder='Left Input'
            value={input.leftInput}
            onChange={(event) => handleInputChange(index, 'leftInput', event)}
          />
        ))}
        <button
          className='bg-green-500 text-white px-4 py-2 rounded mt-4'
          onClick={handleDownload}
        >
          Download
        </button>
      </div>
      <div className='w-1/2 p-4'>
        {inputs.map((input, index) => (
          <input
            key={index}
            type='text'
            className='w-full mb-4 p-2 border border-gray-300 rounded  text-gray-800'
            placeholder='Right Input'
            value={input.rightInput}
            onChange={(event) => handleInputChange(index, 'rightInput', event)}
          />
        ))}
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded mt-4'
          onClick={handleAddInput}
        >
          +
        </button>
      </div>
    </div>
    */
