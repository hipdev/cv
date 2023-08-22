'use client'

import { useState } from 'react'
import PureModal from 'react-pure-modal'
import 'react-pure-modal/dist/react-pure-modal.min.css'

const Jobs: React.FC = () => {
  const [modal, setModal] = useState(false)
  return (
    <>
      <PureModal
        width="90%"
        header="Mi Cupo Stats"
        isOpen={modal}
        closeButton="x"
        closeButtonPosition="bottom"
        onClose={() => {
          setModal(false)
          return true
        }}
      >
        <img src="/cupo.png" />
      </PureModal>

      <h3 className="text-2xl font-semibold mb-5 mt-10">Projects / Jobs</h3>

      <div className="grid grid-cols-2 gap-10 border-b pb-10 border-b-white/5">
        <div className="flex gap-3">
          <div className="w-4/12">2011</div>
          <div className="w-8/12">
            <p className="text-white/70">
              <a
                href="https://lasfincasdelcafe.com"
                target="_blank"
                rel="noreferrer"
                className="border-b mr-1 text-white"
              >
                LasFincasDelCafe
              </a>
              My first web project, still working for that client, even after 12
              years, made with PHP and MySQL
            </p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="w-4/12">2012 - 2018</div>
          <div className="w-8/12">
            <p className="text-white/70">
              <span className="text-white mr-1">Grandpa</span>
              CEO, I created a software agency with my brother, we had a
              product, it was called{' '}
              <a
                href="https://www.youtube.com/watch?v=Iu6VZ-5BYjE&ab_channel=ParqueE"
                target="_blank"
                rel="noreferrer"
              >
                Cottz.
              </a>
              A platform for hospital quotes.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-4/12">2019</div>
          <div className="w-8/12">
            <p className="text-white/70">
              <a
                href="https://sapco.co/"
                target="_blank"
                rel="noreferrer"
                className="border-b mr-1 text-white"
              >
                Sapco
              </a>
              FullStack dev - ReactJs, GraphQL, Yoga, Prisma, MongoDB.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-4/12">2020 - August 2021</div>
          <div className="w-8/12">
            <p className="text-white/70">
              <span className="text-white">ModelNetwork SAS </span>
              Lead Developer - Next.js, Styled Components / FaunaDB.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-4/12">Freelance work</div>
          <div className="w-8/12">
            <p className="text-white/70">
              <span className="text-white">Mi Cupo </span>
              Next.js / TailwindCSS, appointment event system for local churches
              during the pandemic, it was{' '}
              <span
                style={{ textDecoration: 'underline', cursor: 'pointer' }}
                onClick={() => setModal(true)}
              >
                heavily used.
              </span>
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-4/12">March 2021 - Octuber 2021</div>
          <div className="w-8/12">
            <p className="text-white/70">
              <span className="mr-1 text-white">Tinta Love</span>
              Next.js/ TailwindCSS / Supabase, working in a marketplace for
              artists and tattoo studios.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-4/12">Octuber 2021 - April 2023</div>
          <div className="w-8/12">
            <p className="text-white/70">
              <a
                href="https://wander.com"
                target="_blank"
                rel="noreferrer"
                className="border-b mr-1 text-white"
              >
                Wander
              </a>
              Lead Web developer: Next.js / TailwindCSS/ DatoCMS / GraphQL.
              <br /> I was in charge of the Wander website version. I feel very
              proud to have built this website with a great team behind.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-4/12">April 2023 - Currently</div>
          <div className="w-8/12">
            <p className="text-white/70">
              <a
                href="https://getfavor.app"
                target="_blank"
                rel="noreferrer"
                className="border-b mr-1 text-white"
              >
                Favor
              </a>
              Next.js / TailwindCSS/ DatoCMS / GraphQL / React Native /
              Nativewind.
              <br /> I am doing a video dating app with a friend from Germany,
              more news soon.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Jobs
