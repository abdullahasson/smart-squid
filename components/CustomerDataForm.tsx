"use client"

// React
import { useState } from "react"
import { useForm } from "react-hook-form"
// Next Intl
import { useTranslations } from "next-intl"
// Zod
import { zodResolver } from "@hookform/resolvers/zod"
// Schema
import { bookMeetingSchema, TBookMeetingSchema } from "@/schema/index"
// Components
import Confirm from "./Confirm"
// Shadcn UI
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


export default function CustomerDataForm() {

  const t = useTranslations("BookMeeting")

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const form = useForm<TBookMeetingSchema>({
    resolver: zodResolver(bookMeetingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      store: "",
      service: "",
      note: ""
    },

  })

  function onSubmit(values: TBookMeetingSchema) {
    console.log("Form values:", values)
    setIsOpen(true)
    // Handle form submission here
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <h2 className="text-[#C74D0A] text-xl md:text-2xl font-bold mb-3 text-end">
            {t('title')}
          </h2>
          <div className="flex justify-between items-start gap-28 w-full form-responsive">

            <div className="flex-1">
              {/* Meeting Date */}
              {/* Direct Calendar Selection */}
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormControl>
                      <div>
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          className="border-none p-0"
                          disabled={(date) => date < new Date()}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-center" />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex-1 flex flex-col gap-4">
              {/* Full Name */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="rounded-full px-4 py-3 border border-[#5E4D9D]  placeholder:text-end" placeholder={t("fullName")} {...field} />
                    </FormControl>
                    <FormMessage className="text-end" />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="rounded-full px-4 py-3 border border-[#5E4D9D]  placeholder:text-end" placeholder={t("email")} {...field} />
                    </FormControl>
                    <FormMessage className="text-end" />
                  </FormItem>
                )}
              />

              {/* Phone Number */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex gap-2">
                      {/* <Select defaultValue="+963">
                        <SelectTrigger className="w-[120px] px-4 py-3 rounded-full border-[#5E4D9D]">
                          <SelectValue placeholder="+963" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="+963">🇸🇾 +963</SelectItem>
                          <SelectItem value="+971">🇦🇪 +971</SelectItem>
                          <SelectItem value="+966">🇸🇦 +966</SelectItem>
                          <SelectItem value="+20">🇪🇬 +20</SelectItem>
                        </SelectContent>
                      </Select> */}
                      <Input
                        className="rounded-full px-4 py-3 border border-[#5E4D9D]  placeholder:text-end"
                        placeholder={t("phone")}
                        {...field}
                      />
                    </div>
                    <FormMessage className="text-end" />
                  </FormItem>
                )}
              />

              {/* Store */}
              <FormField
                control={form.control}
                name="store"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="rounded-full px-4 py-3 border border-[#5E4D9D]  placeholder:text-end " placeholder={t("store")} {...field} />
                    </FormControl>
                    <FormMessage className="text-end" />
                  </FormItem>
                )}
              />

              {/* Service */}
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder={t('service')}
                        className="resize-none h-40 px-4 py-3 rounded-2xl border border-[#5E4D9D]  placeholder:text-end"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-end" />
                  </FormItem>
                )}
              />

              {/* Note */}
              <FormField
                control={form.control}
                name="note"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder={t('note')}
                        className="resize-none px-4 py-3 rounded-2xl border border-[#5E4D9D]  placeholder:text-end"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-end" />
                  </FormItem>
                )}
              />

              <Button type="submit" className="btn-confirm">{t('submit')}</Button>
              <Confirm isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>


          </div>
        </form>
      </Form>
    </div>
  )
}