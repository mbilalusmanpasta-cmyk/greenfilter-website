import React from "react";
import styled from "styled-components";
const links = [
  {
    id: 0,
    header: "General",
    linkList: [
      {
        id: 0,
        href: "01",
        txt: 'What makes you different from "BRAND X"?',
      },
      {
        id: 1,
        href: "02",
        txt: "Do you make a filter for a [insert vehicle here]?",
      },
      {
        id: 2,
        href: "03",
        txt: "How well does a Green High Performance Air Filter perform?",
      },
      {
        id: 3,
        href: "04",
        txt: "Can I get a Green High Performance Air Filter in a different color?",
      },
      {
        id: 4,
        href: "05",
        txt: "Do you make private label/custom filters?",
      },
      {
        id: 5,
        href: "06",
        txt: "Do I need to oil the filter I just bought before I install it?",
      },
      {
        id: 6,
        href: "07",
        txt: "Where are Green High Performance Air Filters made?",
      },
      {
        id: 7,
        href: "08",
        txt: "Who uses Green High Performance Air Filters?",
      },
      {
        id: 8,
        href: "09",
        txt: "How long does the filter last?",
      },
      {
        id: 9,
        href: "10",
        txt: "Where can I buy a Green High Performance Air Filter?",
      },
    ],
  },

  {
    id: 1,
    header: "Filter Maintenance",
    linkList: [
      {
        id: 0,
        href: "11",
        txt: "How often should I clean my filter?",
      },
      {
        id: 1,
        href: "12",
        txt: "Can I use an air hose to clean my Green High Performance Air Filter?",
      },
      {
        id: 2,
        href: "13",
        txt: "Can I use other cleaners/oils on my Green High Performance Air Filter?",
      },
      {
        id: 3,
        href: "14",
        txt: "What makes Green Filter oil different from other brands?",
      },
    ],
  },

  {
    id: 2,
    header: "Warranty & Returns",
    linkList: [
      {
        id: 0,
        href: "15",
        txt: "I ordered the wrong filter. Can I exchange it?",
      },
      {
        id: 1,
        href: "16",
        txt: "How can I return a filter?",
      },
      {
        id: 2,
        href: "17",
        txt: "Can I get a replacement warranty card?",
      },
      {
        id: 3,
        href: "18",
        txt: "My filter is under warranty and needs to be replaced. What do I need to do?",
      },
    ],
  },
];

const FAQElement1 = () => {
  return (
    <>
      <FAQElement1Wrapper>
        <h1 className="title-header">Frequently Asked Questions</h1>
        <div className="links-container">
          {links.map((link, id) => (
            <div key={id}>
              <h2 className="faqs-links">{link.header}</h2>
              <ul>
                {link.linkList.map((item) => (
                  <li>
                    <a href={item.href} key={item.id}>
                      {item.txt}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="faqs-links">
              <u>GENERAL</u>
            </h2>
            <div className="desc-container">
              <p className="answer">
                <span className="question">
                  What makes you different from "BRAND X"?
                </span>
                <br />A Green High Performance Air Filter flows more air than
                our competitors, which you can see in our{" "}
                <a href="#">Airflow Simulator video</a>, without sacrificing
                filtration. Other factors that we believe make a Green High
                Performance Air Filter the best filter on the market include
                quality materials and solid craftsmanship. Check out our{" "}
                <a href="#">Features and Benefits</a> page for more information.
              </p>
            </div>

            <div className="desc-container">
              <p className="answer">
                <span className="question">
                  Do you make a filter for a [insert vehicle here]?
                </span>
                <br />
                You can check our <a href="#">vehicle fitment </a>list to see if
                we make a filter for your vehicle. If your vehicle is not
                listed, contact us to see if we can make one for you.
              </p>
            </div>
            <div className="desc-container">
              <p className="answer">
                <span className="question">
                  How well does a Green High Performance Air Filter perform?
                </span>
                <br />
                Our filters trap dirt and particles down to 5 microns in size,
                which is the standard that most OEMs use for determining
                filtration levels.
              </p>
            </div>
            <div className="desc-container">
              <p className="answer">
                <span className="question">
                  Can I get a Green High Performance Air Filter in a different
                  color?
                </span>
                <br />
                Some of our filters are available in our{" "}
                <a href="#">ColorMatch</a> line. ColorMatch filters come with
                white cotton filter material and can be dyed any color. These
                filters can be dyed with one of our colored oil kits or with our
                dye packs.
              </p>
            </div>
            <div className="desc-container">
              <p className="answer">
                <span className="question">
                  Do you make private label/custom filters?
                </span>
                <br />
                Yes, we can make a wide variety of filters. If you are
                interested in a private label or custom filter, check out our
                <a href="#">Custom & Private Label Filters</a> page to see some
                of the features we can provide. You can also{" "}
                <a href="#">contact us</a> for more information.
              </p>
            </div>
            <div className="desc-container">
              <p className="answer">
                <span className="question">
                  Do I need to oil the filter I just bought before I install it?
                </span>
                <br />
                No. All Green High Performance Air Filters come pre-oiled from
                the factory, so there is no need to oil it the first time.
              </p>
            </div>
            <div className="desc-container">
              <p className="answer">
                <span className="question">
                  Where are Green High Performance Air Filters made?
                </span>
                <br />
                All Green High Performance Air Filters are made by hand in our
                Mount Braddock, Pennsylvania facility with materials
                manufactured in the USA.
              </p>
            </div>
            <div className="desc-container">
              <p className="answer">
                <span className="question">
                  Who uses Green High Performance Air Filters?
                </span>
                <br />
                In addition to a legion of satisfied customers, many top tier
                race teams at all different levels of competition use Green High
                Performance Air Filters. Check our <a href="#">About Us</a> page
                for some specific examples.
              </p>
            </div>
            <div className="desc-container">
              <p className="answer">
                <span className="question">How long does the filter last?</span>
                <br />
                Green High Performance Air Filters are designed to last for the
                lifetime of your vehicle and are covered by our{" "}
                <a href="">Limited Lifetime Warranty.</a>
              </p>
            </div>
            <div className="desc-container">
              <p className="answer">
                <span className="question">
                  Where can I buy a Green High Performance Air Filter?
                </span>
                <br />
                Green High Performance Air Filters are not sold in big box
                retail stores. You can order directly from us through our{" "}
                <a href="#">online store</a> or through one of our distributors.
              </p>
            </div>
          </div>
          <div>
            <h2 className="faqs-links">
              <u>FILTER MAINTENANCE</u>
            </h2>
            <div className="desc-container">
              <p className="answer">
                <span className="question">
                  How often should I clean my filter?
                </span>
                <br />
                We recommend that you visually inspect your Green High
                Performance Air Filter at every oil change. As a general rule, a
                Green High Performance Air Filter should be cleaned at every
                30,000 miles; however, this interval can be greatly influenced
                by your environment and driving conditions. In dusty areas, you
                may need to clean the filter more often.
              </p>
            </div>
            <div className="desc-container">
              <p className="answer">
                <span className="question">
                  Can I use an air hose to clean my Green High Performance Air
                  Filter?
                </span>
                <br />
                We do not recommended using compressed air to clean a Green High
                Performance Air Filter because of the risk of damage to the
                filter. We recommend using a soft-bristle brush to remove packed
                dirt and debris from the filter.
              </p>
            </div>
            <div className="desc-container">
              <p className="answer">
                <span className="question">
                  Can I use other cleaners/oils on my Green High Performance Air
                  Filter?
                </span>
                <br />
                Only Green Filter USA's biodegradable cleaner and lightweight
                synthetic oil are approved for use on a Green High Performance
                Air Filter. Use of other cleaners or oils is not recommended and
                may void the filter's Limited Lifetime Warranty.
              </p>
            </div>
            <div className="desc-container">
              <p className="answer">
                <span className="question">
                  What makes Green Filter oil different from other brands?
                </span>
                <br />
                <ul>
                  <li>
                    Green High Performance Air Filters come pretreated with a
                    specially formulated dirt-trapping oil. Our proprietary
                    lightweight, synthetic Green Filter oil is designed to not
                    damage any vehicle sensors.
                  </li>
                  <li>
                    This oil creates a positive (+) magnetic charge, or ionic
                    bond, with the filter's stainless steel mesh. The positive
                    charge attracts the negatively (-) charged dust particles
                    entering the filter, causing them to cling to the steel mesh
                    and allowing the cotton to remain clear for maximum air
                    flow.
                  </li>
                  <li>
                    Green Filter oil also contains a swelling additive for the
                    cotton filtration media. This causes the cotton fibers to
                    swell, which allows the filtration media to collect the very
                    small dirt particles (down to 5 microns) that could
                    otherwise harm your engine.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div>
            <h2 className="faqs-links">
              <u>WARRANTY & RETURNS</u>
            </h2>
            <div className="desc-container">
              <p className="answer">
                <span className="question">
                  I ordered the wrong filter. Can I exchange it?
                </span>
                <br />
                Yes, please{" "}
                <a href="#">download and complete the Filter Exchange form</a>.
                Once you have completed the form, send it along with the filter
                (and any payment, if necessary) to the address listed on the
                form.
              </p>
              <div class="note">
                <span class="warn">
                  *NOTE: YOU MUST CALL US FOR AN RGA NUMBER BEFORE SENDING ANY
                  FILTER TO US.
                </span>{" "}
                Any filter sent to us without an RGA number may not be
                exchanged. Please read the form carefully and make sure that all
                steps are followed to insure a quick exchange of your filter.
              </div>
            </div>
            <div className="desc-container">
              <p className="answer">
                <span className="question">How can I return a filter?</span>
                <br />
                Please{" "}
                <a href="#">download and complete the Filter Return form</a>.
                Once you have completed the form, send it along with the filter
                to the address listed on the form.
              </p>
              <div class="note">
                <span class="warn">
                  *NOTE: YOU MUST CALL US FOR AN RGA NUMBER BEFORE SENDING ANY
                  FILTER TO US.
                </span>{" "}
                Any filter sent to us without an RGA number may not be
                exchanged. Please read the form carefully and make sure that all
                steps are followed to insure a quick exchange of your filter.
              </div>
            </div>
            <div className="desc-container">
              <p className="answer">
                <span className="question">
                  {" "}
                  Can I get a replacement warranty card?
                </span>
                <br />
                Yes. If the warranty card was lost or if you did not receive one
                you can download it here. You have 30 days from the date of
                purchase to return it.
              </p>
            </div>
            <div className="desc-container">
              <p className="answer">
                <span className="question">
                  My filter is under warranty and needs to be replaced. What do
                  I need to do?
                </span>
                <br />
                If you should need to make a warranty claim, please download the
                Warranty Return form here. The form provides instructions for
                returning a filter to us.
              </p>
              <div class="note">
                <span class="warn">
                  *NOTE: YOU MUST CALL US FOR AN RGA NUMBER BEFORE SENDING ANY
                  FILTER TO US.
                </span>{" "}
                Any filter sent to us without an RGA number may not be
                exchanged. Please read the form carefully and make sure that all
                steps are followed to insure a quick exchange of your filter.
              </div>
            </div>
          </div>
          <span>
            If you have a question that is not answered here, please{" "}
            <a href="#">contact us</a>.
          </span>
        </div>
      </FAQElement1Wrapper>
    </>
  );
};

export default FAQElement1;

const FAQElement1Wrapper = styled.div`
  padding: 75px 20px 50px;
  .title-header {
    font-size: 32px;
    font-weight: bold;
  }
  .faqs-links {
    font-size: 20px;
    font-weight: bold;
  }
  ul {
    font-size: 16px;
  }

  a {
    color: #14800d;
    font-size: 16px;
  }

  .desc-container {
    border: 1px solid #aaaaaa;
    padding: 20px 10px;
    margin: 20px 0px;
  }

  span.question {
    font-weight: bold;
    font-style: italic;
    color: #000000;
    font-size: 16px;
    padding: 5px 10px;
  }

  .answer {
    color: #000;
    font-size: 16px;
  }
  .note {
    padding-left: 20px;
  }
  span.warn {
    color: #ff0000;
    font-weight: bold;
  }
`;
