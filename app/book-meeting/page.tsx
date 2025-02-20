// "use client"

// import { useState } from "react"

// import { Calendar } from "@/components/ui/calendar"
import CustomerDataForm from "@/components/CustomerDataForm";

const BookMeeting = () => {
  // const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div>
      <div className="container mx-auto py-12">
        <CustomerDataForm />
      </div>
    </div>
  )
}

export default BookMeeting
