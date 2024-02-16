// npm modules
import { useState } from 'react'

// css
import styles from './RepairAdd.module.css'

const RepairAdd = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    priority: '!',
    description: '',
  })

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddRepair(formData)
  }

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Add a New Repair</h2>
        <label htmlFor="name-input">Name</label>
        <input 
          required
          type="text" 
          name="name"
          id="name-input"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
        />

        {/* <label htmlFor="priority-input">Priority</label>
        <input 
          type="text"
          name="priority"
          id="priority-input"
          value={formData.priority}
          placeholder="Priority"
          onChange={handleChange}
        /> */}
        <label htmlFor="priority-input1">Priority:</label>
        <select 
          required 
          name="priority"
          id="priority-input1"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="!" title="Low Priority" >!</option>
          <option value="!!" title="Mid Priority" >!!</option>
          <option value="!!!" title="High Priority" >!!!</option>
          
        </select>

        <label htmlFor="description-input">Description</label>
        <input 
          type="text" 
          name="description"
          id="description-input"
          value={formData.description}
          placeholder="Description"
          onChange={handleChange}
        />
        <div style={{ width: 'fit-content' }}>
          <button type="submit">Add Repair 🔧✨</button>
        </div>
      </form>
    </main>
  )
}

export default RepairAdd