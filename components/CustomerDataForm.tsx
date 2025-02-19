// Input 
import { Input } from "@/components/ui/input"

const CustomerDataForm = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold">البيانات العميل</h2>
      <form action="" className="flex flex-col gap-4">
        <div>
          <Input type="text" />
        </div>
        <div>
          <Input type="email" />
        </div>
        <div>
          <Input type="tel" />
        </div>
        <div>
          <Input type="text" />
        </div>
        <div>
          <textarea name="" id=""></textarea>
        </div>
        <div>
          <textarea name="" id=""></textarea>
        </div>
        <button type="submit">تأكيد</button>
      </form>
    </div>
  )
}

export default CustomerDataForm
