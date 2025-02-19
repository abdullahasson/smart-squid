// "use client"

// import { useState } from "react"

// import { Calendar } from "@/components/ui/calendar"
import CustomerDataForm from "@/components/CustomerDataForm";

const page = () => {
  // const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div>
      <div className="container mx-auto flex justify-between">
        <CustomerDataForm />

        {/* <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="border-none"
        /> */}
      </div>
    </div>
  )
}

export default page
