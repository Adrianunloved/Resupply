import prismadb from "@/lib/Prismadb"

interface dashboardPageProps {
    params: {storeId: string}
};


const DashboardPage: React.FC<dashboardPageProps>= async({
    params
}) => {
    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId
        }
    });

    return(
        <div>
            Active Store: {store?.name}

        </div>

    );
    
}

export default DashboardPage;