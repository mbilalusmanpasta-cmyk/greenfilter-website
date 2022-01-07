import React from "react";
import styled from "styled-components";

const PPElement1 = () => {
  return (
    <>
      <PPElement1Wrapper>
        <div>
          <h2 className="faqs-links">
            Our Policy for Protecting Your Online Privacy
          </h2>
          <p>
            This website uses “cookies”, which are text files placed on your
            computer, from Google Analytics. Google Analytics is a web analytics
            tool that helps website owners understand how visitors engage with
            their website. Google Analytics customers can view a variety of
            reports about how visitors interact with their website so that they
            can improve it.
          </p>
          <p></p>
          <p>
            Like many services, Google Analytics uses first-party cookies to
            track visitor interactions, as in our case, where they are used to
            collect information about how visitors use our site and to compile
            statistical reports on website activity. In addition to the standard
            Google Analytics data we also use a subset of this data, called
            Google Analytics Demographics and Interest Reporting, to help us
            target our products and information to the users most likely to use
            our site.
          </p>
          <p></p>
          <p>
            We will not facilitate the merging of personally-identifiable
            information with non-personally identifiable information previously
            collected unless we have robust notice of, and the user's prior
            affirmative (i.e., opt-in) consent to, that merger.
          </p>
          <h2 className="faqs-links">Opt Out</h2>
          <p>
            Google Analytics collects information anonymously. It reports
            website trends without identifying individual visitors.{" "}
            <span style={{ fontWeight: "bold" }}>
              You can opt out of Google Analytics without affecting how you
              visit our site
            </span>
            – for more information on opting out of being tracked by Google
            Analytics across all websites you use, you can use the{" "}
            <a href="https://tools.google.com/dlpage/gaoptout/">
              Google Analytics opt-out browser add-on
            </a>{" "}
            that is available for many current browsers.
          </p>
        </div>
      </PPElement1Wrapper>
    </>
  );
};

export default PPElement1;

const PPElement1Wrapper = styled.div`
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

  p {
    color: #000;
    font-size: 16px;
    margin: 20px 0;
  }
`;
