import React from 'react'
import DashHeader from '../component/dashboard/DashHeader'
import { Route, Router, Routes } from 'react-router-dom'
import ZoneMaster from '../component/menus/admin/ZoneMaster'

const Menus = () => {
    return (
        <>
            <DashHeader />
            <Routes>
                <Route path="zone-master" element={<ZoneMaster />} />
            </Routes>
        </>
    )
}

export default Menus
