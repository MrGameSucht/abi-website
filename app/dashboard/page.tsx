
import { getAuth } from '@/app/lib/getAuth';
import NextAppointment from '@/app/ui/dashboard/nextAppointment';
import RevenueTracker from '@/app/ui/dashboard/revenueTracker';
import { getClosestTermin, getAusgaben, getEinnahmen } from '@/app/lib/dbConnection';
import { QueryResultRow } from '@vercel/postgres';

type FinanzenTable = {name: string, money: number}[]

const Dashboard = async () => {
    const [token, role, user] = await getAuth();
    const termin: QueryResultRow = await getClosestTermin();
    const ausgaben: FinanzenTable = await getAusgaben();
    const einnahmen: number = await getEinnahmen();

    

    var ausgabenSum = 0;
    ausgaben.forEach((element: any) => {
        ausgabenSum += element.money;
    });

    
    
    // <div className='w-[250px] h-[250px] bg-red-900 rounded-lg'></div>
    // <div className='w-[250px] h-[250px] bg-red-900 rounded-lg'></div>
    // <div className='w-[250px] h-[250px] bg-red-900 rounded-lg'></div>
    if (role === "user")
        return (
            <div className='grow flex flex-wrap gap-5 p-5 max-h-[calc(100vh-103px)] lg:max-h-[calc(100vh-40px)] overflow-auto scrollbar-none justify-center lg:justify-normal'>
                <NextAppointment termin={termin}/> 
                <RevenueTracker value={einnahmen} max={ausgabenSum}/>
            </div>);
    else if (role === "admin") //admin user
        return <h1>Welcome Admin</h1>;
    
    
};

export default Dashboard;