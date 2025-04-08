import React from 'react'
import DashHeader from '../component/dashboard/DashHeader'
import { Route, Router, Routes } from 'react-router-dom'
import ZoneMaster from '../component/menus/admin/ZoneMaster'
import StateConfigCwh from '../component/menus/admin/StateConfigCwh'
import DrugTypeMaster from '../component/menus/admin/DrugTypeMaster'

const Menus = () => {
    return (
        <>
            <DashHeader />
            <Routes>
                <Route path="zone-master" element={<ZoneMaster />} />
                <Route path="state-config-cwh" element={<StateConfigCwh />} />
                <Route path="drug-type-master" element={<DrugTypeMaster />} />
            </Routes>
        </>
    )
}

export default Menus
