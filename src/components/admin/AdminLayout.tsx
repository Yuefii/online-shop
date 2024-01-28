import React from 'react'
import Sidebar from '../sidebar/Sidebar'

const AdminLayout = ({children}:any) => {
  return (
    <>
      <main>
        <Sidebar/>
        <div >
            {children}
        </div>
      </main>
    </>
  )
}

export default AdminLayout
