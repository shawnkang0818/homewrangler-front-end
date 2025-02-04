// npm modules
import { useState } from 'react'

// pages

// components
import RepairAdd from '../../components/RepairAdd/RepairAdd'
import RepairCard from '../../components/RepairCard/RepairCard'
import BudgetAvail from '../../components/BudgetAvail/BudgetAvail'

// services

// css
import styles from './Repairs.module.css'

const Repairs = (props) => {
  const [showAddRepair, setShowAddRepair] = useState(false)

  const filteredRepairs = props.repairs.filter(repair => repair.owner._id === props.profile._id)

  const toggleAddRepairForm = () => {
    setShowAddRepair(!showAddRepair)
  }
  
  return (
    <main className={styles.container}>
      <h1>Repairs</h1>
      <div style={{ width: 'fit-content' }}>
        <button onClick={toggleAddRepairForm}>
          {showAddRepair ? "Collapse this form" : "Add New Repair"}
        </button>
      </div>
      <br></br>
      <BudgetAvail budgets={props.budgets} profile={props.profile}/>
      <br></br>
      {showAddRepair && <RepairAdd handleAddRepair={props.handleAddRepair} /> }
      {filteredRepairs.map(repair => (
        <RepairCard 
          key={repair._id} 
          repair={repair} 
        />
      ))}
      {/* <BudgetAvail /> */}
    </main>
  )
}

export default Repairs