import React from 'react'
export default function Return() {
  return (
    <div>
        <h1 className="mt-5 text-2xl font-bold">Return Package</h1>
        <div class="flex items-center justify-center mt-5">
    <div class="mx-auto w-full max-w-[550px] bg-white">
        <form>
            <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3">
                    <div class="mb-3">
                        <input type="text" name="fName" id="fName" placeholder="Recipient name"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md label-return-package" />
                    </div>
                    <div class="mb-3">
                        <input type="text" name="fName" id="fName" placeholder="Phone number"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md label-return-package" />
                    </div>
                    <div class="mb-3">
                        <input type="text" name="fName" id="fName" placeholder="Enter Items ID"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md label-return-package" />
                    </div>
                    <div class="mb-3">
                    <input type="text" name="fName" id="fName" placeholder="Enter your reason"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md label-return-package" />
                    </div>
                </div>
            </div>
            <div class="mb-3">
                
               <div className="flex items-center mx-4 border border-[#e0e0e0]">
               <input type="number" name="guest" id="guest" placeholder="How many package do you want to return?" min="0"
                    class="w-full appearance-none rounded-md  bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md label-return-package" />
                    <p>Package</p>
               </div>
            </div>
            <div>
                <button
                    class="hover:shadow-form rounded-md bg-[#6A64F1] py-2 px-4 text-center text-base font-semibold text-white outline-none">
                    Submit
                </button>
            </div>
        </form>
    </div>
</div> 
    </div>
  )
}
