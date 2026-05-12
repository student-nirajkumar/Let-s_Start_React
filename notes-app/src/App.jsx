import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notes, setNotes] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    if (title.trim() === '' || note.trim() === '') return

    const newNote = {
      id: Date.now(),
      title,
      note
    }

    setNotes([...notes, newNote])
    setTitle('')
    setNote('')
  }

  const clearHandler = () => {
    setTitle('')
    setNote('')
  }

  const deleteHandler = (id) => {
    const filteredNotes = notes.filter((item) => item.id !== id)
    setNotes(filteredNotes)
  }

  return (
    <div className='min-h-screen bg-black text-white p-5'>
      <div className='max-w-6xl mx-auto flex flex-col lg:flex-row gap-8'>

        {/* Left Side Form */}
        <div className='w-full lg:w-1/2 bg-zinc-900 rounded-2xl p-6'>
          <form onSubmit={submitHandler} className='flex flex-col gap-4'>
            <input
              type='text'
              placeholder='Enter note title...'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='px-5 py-3 border-2 rounded bg-transparent outline-none text-white placeholder:text-gray-400 caret-white'
            />

            <textarea
              placeholder='Write a note...'
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className='px-5 py-3 h-32 border-2 rounded bg-transparent outline-none text-white placeholder:text-gray-400 caret-white resize-none'
            />

            <div className='flex gap-3'>
              <button
                type='submit'
                className='bg-white text-black px-5 py-3 rounded font-semibold cursor-pointer hover:bg-gray-200 transition-all duration-300'
              >
                Add Note
              </button>

              <button
                type='button'
                onClick={clearHandler}
                className='bg-red-500 text-white px-5 py-3 rounded font-semibold cursor-pointer hover:bg-red-600 transition-all duration-300'
              >
                Clear
              </button>
            </div>
          </form>
        </div>

        {/* Right Side Notes */}
        <div className='w-full lg:w-1/2 bg-zinc-900 rounded-2xl p-6'>
          <h1 className='text-3xl font-bold mb-6'>Your Notes</h1>

          <div className='flex flex-wrap gap-5'>
            {notes.length === 0 ? (
              <p className='text-gray-400'>No notes added yet.</p>
            ) : (
              notes.map((item) => (
                <div
                  key={item.id}
                  className='w-full sm:w-44 bg-white text-black rounded-2xl p-4'
                >
                  <h2 className='text-xl font-bold mb-3'>{item.title}</h2>
                  <p className='text-sm mb-4'>{item.note}</p>

                  <button
                    onClick={() => deleteHandler(item.id)}
                    className='bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-red-500 transition-all duration-300 cursor-pointer'
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default App