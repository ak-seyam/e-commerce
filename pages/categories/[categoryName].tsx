import { useRouter } from "next/router";
import { useState } from "react";
import Drawer from "../../components/common/Drawer/drawer";
import CommonLayout from "../../components/common/layout";
import CategoryLayout from "../../components/layouts/category/cateogy";

export default function CategoriesPage() {
    const router = useRouter()
    const categoryName = router.query["categoryName"] as string
    const [page, setPage] = useState(1)
    // TODO add pagination
    return (
        <>
            <CommonLayout>
                <Drawer></Drawer>
                <CategoryLayout categoryName={categoryName} productsSrc={`http://localhost:3001/${categoryName}`} />
            </CommonLayout>
        </>
    )
}
