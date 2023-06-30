/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import './index.css'

const TabItem = props => {
  const {tabDetails, activeTab} = props
  const {tabId, displayText} = tabDetails

  const activeTabButton = () => {
    activeTab(tabId)
  }

  return (
    <li className="list-item">
      <button className="tab-btn" onClick={activeTabButton}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
