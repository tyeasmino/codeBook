import React from 'react'

const faqs = [
  {
    "id": 1,
    "question": "Why should I use CodeBook?",
    "answer": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus earum dicta nesciunt, nulla alias consequuntur cumque incidunt saepe mollitia esse! Magni praesentium delectus excepturi nostrum illo repellendus cum eius neque, aperiam dolores quaerat quis dolore magnam doloremque minus sint nemo qui necessitatibus at. Perspiciatis, corrupti cum labore quos odio porro!"
  },
  {
    "id": 2,
    "question": "Can I access my eBook on mobile?",
    "answer": "1Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus earum dicta nesciunt, nulla alias consequuntur cumque incidunt saepe mollitia esse! Magni praesentium delectus excepturi nostrum illo repellendus cum eius neque, aperiam dolores quaerat quis dolore magnam doloremque minus sint nemo qui necessitatibus at. Perspiciatis, corrupti cum labore quos odio porro!"
  },
  {
    "id": 3,
    "question": "Do you offer refunds?",
    "answer": "2Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus earum dicta nesciunt, nulla alias consequuntur cumque incidunt saepe mollitia esse! Magni praesentium delectus excepturi nostrum illo repellendus cum eius neque, aperiam dolores quaerat quis dolore magnam doloremque minus sint nemo qui necessitatibus at. Perspiciatis, corrupti cum labore quos odio porro!"
  },
  {
    "id": 4,
    "question": "Do you support Internation payments?",
    "answer": "3Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus earum dicta nesciunt, nulla alias consequuntur cumque incidunt saepe mollitia esse! Magni praesentium delectus excepturi nostrum illo repellendus cum eius neque, aperiam dolores quaerat quis dolore magnam doloremque minus sint nemo qui necessitatibus at. Perspiciatis, corrupti cum labore quos odio porro!"
  },


]


const FAQ = () => {
  return (
    <section>
      <div
        className="relative w-full px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
        <div className="mx-auto px-5">
          <div className="flex flex-col items-center">
            <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
            <p className="mt-3 text-lg text-neutral-500 md:text-xl">Frequenty asked questions

            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">

            {
              faqs.map((faq) => (
                <article key={faq.id}>
                  <div className="py-5">
                    <details className="group">

                      <summary className="flex cursor-pointer list-none items-center justify-between font-medium">

                        <span>{faq.question}</span>

                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision"
                            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>

                      </summary>

                      <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                        {faq.answer}
                      </p>

                    </details>
                  </div>
                </article>
              ))
            }
          </div>
        </div>
      </div>
      <br /><br /><br />
    </section>
  )
}

export default FAQ