import { fetchRevenue } from "@/app/lib/data"
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import { lusitana } from '@/app/ui/fonts';


export default function Page(){
   
    return (
        
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Cusrtomers
      </h1>
    )
    
}