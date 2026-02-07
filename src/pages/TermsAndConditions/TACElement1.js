import React from "react";
import styled from "styled-components";

const TACElement1 = () => {
  return (
    <>
      <TACElement1Wrapper>
        <div>
          <h2 className="faqs-links">
          Terms of Service

          </h2>
          <p>
          Thanks for using the services of the National Hole In One Registry (“Services”). The Services are provided by Eureka Golf Products, located at 1901 Associates Lane, Suite F, Charlotte, NC 28217, United States.
<br/>
<br/>

By using our Services, you are agreeing to these terms. Please read them carefully.
          </p>

                  
<h4 className="faqs-links">
Using our Services
          </h4> 
          <p>You must follow any policies made available to you within the Services.
<br/>
<br/>

Using our Services does not give you ownership of any intellectual property right in our Services or the content you access. You may not use content from our Services unless you obtain permission from its owner and or are otherwise permitted by law. These terms do not grant you the right to use any branding or logos used in our Services. Don’t remove, obscure, or alter any legal notices displayed in or along with our Services.
<br/>
<br/>
Our Services display some content that is not the Eureka’s Golf Product’s. This content is the sole responsibility of the entity that makes it available. We may review content to determine whether it is illegal or violates our policies, and we may remove or refuse to display content that we reasonably believe violates our policies or the law. But that does not necessarily mean that we review content, so please don’t assume that we do.
<br/>
<br/>
In connection with your use of the Services, we may send you service announcements, administration messages and other information. You may opt out of some of those communications.</p>
        


<h4 className="faqs-links">
Your Content in our Services          </h4> 
          <p>
          Some of our Services allow you to upload, submit, store, send or receive content. You retain ownership of any intellectual property rights that you hold in that content. In short, what belongs to you stays yours.
          <br/>
<br/>
When you upload, submit, store, send or receive content to or through our Services, you give Eureka Golf Products (and those we work with) a worldwide license to use, host, store, reproduce, modify, create derivative works (such as those resulting from translations, adaptations or other changes we make so that your content works better with our Services), communicate, publish, publicly perform, publicly display and distribute such content. The rights you grant in this license are for the limited purpose of operating, promoting, and improving our Services, and to develop new ones.
          </p>




          <h4 className="faqs-links">
          Privacy Policy          </h4> 
          <p>Eureka Golf Products respects your privacy and promises to earn and keep your trust. We understand the importance of privacy, and we want you to be as comfortable as possible visiting our website and using its Services. All information about you is securely stored and will not be used in ways that you have not consented. We will not disclose, sell or distribute any information that identifies you to a third party without your explicitly approval, except to the extent necessary to comply with applicable law, legal process or in a legal proceedings where such information is relevant.
          <br/>
<br/>
For more information about how to contact the National Hole In One Registry, please visit our <a> contact page. </a></p>
         
         
        </div>
      </TACElement1Wrapper>
    </>
  );
};

export default TACElement1;

const TACElement1Wrapper = styled.div`
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
 h4{ 
    padding-bottom: 10px;
  color: #333;
  font-weight: normal !important;
  line-height: 1em;
  text-align:left;
  font-family:"Arial";
  font-size:18px;
 }

  p {
    color: #666;
    font-size: 14px;
    margin: 20px 0;
    font-family: 'Arial',Helvetica,Arial,Lucida,sans-serif;
  }
  h2 {
 font-family:   'Roboto Slab',serif;
 font-size:30px !important;

  }
`;
