"use client";

import Link from "next/link";
import { SolutionData } from "@/types/solutionitem";

export default function Solution({ SolutionItem, image }: SolutionData) {
  return (
    <div className="solution-block">
      <div className="row g-0">
        <div className="col-md-6">
          <img src={image} alt="FAQ" width="100%" height="100%" />
        </div>

        <div className="col-md-6">
          <div className="accordion custom-accordion" id="homefaq">
            {SolutionItem.map((items, index) => {
              const isFirst = index === 0;

              return (
                <div className="accordion-item" key={items.id}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${isFirst ? "" : "collapsed"}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq-${items.id}`}
                    >
                      {items.title}
                    </button>
                  </h2>

                  <div
                    id={`faq-${items.id}`}
                    className={`accordion-collapse collapse ${isFirst ? "show" : ""}`}
                    data-bs-parent="#homefaq"
                  >
                    <div className="accordion-body">
                      {items.content}

                      <Link
                        href={items.link}
                        className="d-block text-uppercase text-decoration-underline text-muted mt-2"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
