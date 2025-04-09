import React from 'react'
import DashHeader from '../component/dashboard/DashHeader'
import { Route, Router, Routes } from 'react-router-dom'
import ZoneMaster from '../component/menus/admin/ZoneMaster'
import StateMaster from '../component/menus/admin/StateMaster'

const Menus = () => {
    return (
        <>
            <DashHeader />
            <Routes>
                <Route path="zone-master" element={<ZoneMaster />} />
                <Route path="state-master" element={<StateMaster />} />
            </Routes>
        </>
    )
}

export default Menus
