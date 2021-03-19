import Head from "next/head"
import Drawer from "../components/common/Drawer/drawer"
import CommonLayout from "../components/common/layout"
export default function Landing() {
  return (
    <>
      <CommonLayout>
        <Drawer></Drawer>
      </CommonLayout>
    </>
  )
}