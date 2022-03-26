import React from 'react'

export default function SearchBar() {
  return (
    <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
            <input
            type="search"
            class="
                form-control
                block
                w-56
                mx-auto
                px-4
                py-1.5
                text-base
                text-gray-700
                bg-white bg-clip-padding
                rounded-2xl
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            id="exampleSearch"
            placeholder="Search"
            />
        </div>
    </div>
  )
}
