import React from 'react'
import SidebarComponent from '../component/dashboard/Sidebar'
import DashHeader from '../component/dashboard/DashHeader'

const DvdmsDashboard = () => {
    return (
        <div>
            <DashHeader />
            <div style={{
                display: 'flex',
                backgroundColor: "#f4f4f4",
                minHeight: "100vh"
            }}>

                <SidebarComponent />

                <main style={{ padding: "10px 20px", flex: 1 }}>
                    <h1>bajrang</h1>
                </main>
            </div>
        </div>
    )
}

export default DvdmsDashboard
