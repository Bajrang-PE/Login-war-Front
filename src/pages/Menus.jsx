import React from 'react'
import DashHeader from '../component/dashboard/DashHeader'
import { Route, Router, Routes } from 'react-router-dom'
import ZoneMaster from '../component/menus/admin/ZoneMaster'
import StateConfigCwh from '../component/menus/admin/StateConfigCwh'
import DrugTypeMaster from '../component/menus/admin/DrugTypeMaster'
import StateMaster from '../component/menus/admin/StateMaster'
import FacilityTypeMaster from '../component/menus/admin/FacilityTypeMaster'
import GenericDrugMaster from '../component/menus/admin/GenericDrugMaster'
import FacilityTypeMappingMaster from '../component/menus/admin/FacilityTypeMappingMaster'

const Menus = () => {
    return (
        <>
            <DashHeader />
            <Routes>
                <Route path="zone-master" element={<ZoneMaster />} />
                <Route path="state-config-cwh" element={<StateConfigCwh />} />
                <Route path="drug-type-master" element={<DrugTypeMaster />} />
                <Route path="state-master" element={<StateMaster />} />
                <Route path="facility-type-master" element={<FacilityTypeMaster />} />
                <Route path="generic-drug-master" element={<GenericDrugMaster />} />
                <Route path="facility-type-mapping-master" element={<FacilityTypeMappingMaster />} />
            </Routes>
        </>
    )
}

export default Menus
