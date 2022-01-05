import React from "react";
import styled from "styled-components";
import VehicleElement1 from "./VehicleElement1";
import VehicleElement2 from "./VehicleElement2";
const VehicleElement12 = ({ vehicle }) => {
  return (
    <>
      <VehicleElement12Wrapper>
        <div className="w-row">
          <div className="w-col-2">
            <VehicleElement2 vehicle={vehicle} />
          </div>
          <div className="w-col-2">
            <VehicleElement1 />
          </div>
        </div>
      </VehicleElement12Wrapper>
    </>
  );
};

export default VehicleElement12;

const VehicleElement12Wrapper = styled.div`
  .w-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .w-col-2 {
    width: 50% !important;
  }

  @media screen and (max-width: 1400px) {
    .w-col-2 {
      width: 100% !important;
    }
  }
`;
