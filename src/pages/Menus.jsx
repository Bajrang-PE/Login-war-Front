import React from 'react'
import DashHeader from '../component/dashboard/DashHeader'
import { Route, Router, Routes } from 'react-router-dom'
import ZoneMaster from '../component/menus/admin/ZoneMaster'
import StateConfigCwh from '../component/menus/admin/StateConfigCwh'
import DrugTypeMaster from '../component/menus/admin/DrugTypeMaster'
import DrugTypeForm from './DrugTypeForm'
import StateMaster from '../component/menus/admin/StateMaster'
import SupplierMaster from '../component/menus/admin/SupplierMaster'
import SupplierMappingMaster from '../component/menus/admin/SupplierMappingMaster'

const Menus = () => {
    return (
        <>
            <DashHeader />
            <Routes>
                <Route path="zone-master" element={<ZoneMaster />} />
                <Route path="state-config-cwh" element={<StateConfigCwh />} />
                <Route path="drug-type-master" element={<DrugTypeMaster />} />
                <Route path="drug-type-form" element={<DrugTypeForm />} />
                <Route path="state-master" element={<StateMaster />} />
                <Route path="supplier-master" element={<SupplierMaster />} />
                <Route path="supplier-mapping-master" element={<SupplierMappingMaster />} />
            </Routes>
        </>
    )
}

export default Menus
