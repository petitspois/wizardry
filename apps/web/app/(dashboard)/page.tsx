import React from "react"
import {Metadata} from "next"
import {ArrowRight} from "lucide-react"
import {Search} from '@/components/search'
import {Collection} from "@/components/collection"
import {IconCollection} from '@/components/icon-collection'

const title = "Wizardry Icons"
const description =
  "An exquisite two-tone icon library that mainly uses black, white, and gray colors."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function IndexPage() {
  return (
    <>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <div className="container flex flex-col items-start gap-1 py-8 md:py-10 lg:py-12">
            <div className="relative mx-auto flex flex-col items-center">
              <div className="mb-8 flex">
                <a
                  href="https://github.com/petitspois/aoian-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                    <span
                      className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]"/>
                    <div
                      className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200">
                      New snippets ⚡️
                      <span className="inline-flex items-center pl-2 text-black dark:text-white">
                        Read more{" "}
                        <ArrowRight
                          className="pl-0.5 text-black dark:text-white"
                          size={16}
                        />
                      </span>
                    </div>
                  </span>
                </a>
              </div>
              <h2 className="text-center text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-7xl">
                <span
                  className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                  Wizardry Icons
                </span>
              </h2>
              <p className="mt-6 text-center text-lg leading-6 text-gray-600 dark:text-gray-200">
                An exquisite two-tone icon library that mainly uses black, white, and gray colors.
              </p>
            </div>
          </div>
        </div>
      </div>
      <IconCollection/>
    </>
  )
}
